import { z } from "zod";

export const shopifyBriefSchema = z.object({
  stage: z.enum(["planning", "launching", "live", "growing"]),
  goal: z.enum(["launch", "redesign", "sales", "traffic", "fixes", "ongoing"]),
  challenge: z.string().trim().min(12, "Please share a little more about the main challenge.").max(800),
  context: z.string().trim().max(1200),
});

export type ShopifyBrief = z.infer<typeof shopifyBriefSchema>;

export type ServiceRecommendation = {
  title: string;
  group: string;
  description: string;
  reason: string;
};

export type ProjectRecommendation = {
  slug: string;
  title: string;
  category: string;
  description: string;
  reason: string;
  url: string;
  image: string;
};

export type ShopifyRecommendationResult = {
  ok: true;
  summary: string;
  priorities: string[];
  services: ServiceRecommendation[];
  projects: ProjectRecommendation[];
} | {
  ok: false;
  error: string;
};