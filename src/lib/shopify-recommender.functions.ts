import { createServerFn } from "@tanstack/react-start";

import { PROJECTS, SERVICE_GROUPS } from "./site-data";
import {
  shopifyBriefSchema,
  type ShopifyRecommendationResult,
} from "./shopify-recommender.schema";

export const recommendShopifyServices = createServerFn({ method: "POST" })
  .inputValidator((input) => shopifyBriefSchema.parse(input))
  .handler(async ({ data }): Promise<ShopifyRecommendationResult> => {
    const apiKey = process.env['LOVABLE_API_KEY']!;
    if (!apiKey) {
      return { ok: false, error: "Recommendations are not configured yet. Please contact Kamyorg directly." };
    }

    const services = SERVICE_GROUPS.flatMap((group) =>
      group.items.map((item) => ({ group: group.group, title: item.t, description: item.d })),
    );
    const projects = PROJECTS.map((project) => ({
      slug: project.slug,
      title: project.t,
      category: project.c,
      description: project.desc,
      tags: project.tags,
    }));

    const { buildShopifyRecommendation } = await import("./shopify-recommender.server.ts");
    const recommendation = await buildShopifyRecommendation(data, services, projects, apiKey);
    if (!recommendation.data) return { ok: false, error: recommendation.error };

    const serviceByTitle = new Map(services.map((service) => [service.title, service]));
    const projectBySlug = new Map(PROJECTS.map((project) => [project.slug, project]));

    const matchedServices = recommendation.data.services.flatMap(({ title, reason }) => {
      const service = serviceByTitle.get(title);
      return service ? [{ ...service, reason }] : [];
    });
    const matchedProjects = recommendation.data.projects.flatMap(({ slug, reason }) => {
      const project = projectBySlug.get(slug);
      return project
        ? [{
            slug: project.slug,
            title: project.t,
            category: project.c,
            description: project.desc,
            reason,
            url: project.url,
            image: project.img,
          }]
        : [];
    });

    if (matchedServices.length === 0 || matchedProjects.length === 0) {
      return { ok: false, error: "I couldn't match that brief confidently. Please add a little more detail and try again." };
    }

    return {
      ok: true,
      summary: recommendation.data.summary,
      priorities: recommendation.data.priorities,
      services: matchedServices,
      projects: matchedProjects,
    };
  });