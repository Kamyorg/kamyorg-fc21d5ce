# Shopify Service Recommender

## Goal
Add a polished in-app brief where prospective clients describe their store, goals, and current challenges, then receive a practical recommendation of Kamyorg services and relevant real portfolio projects.

## Experience
- Add a new recommendation section to the Services page so it sits naturally beside the existing service catalogue.
- Collect a short store brief: business stage, primary goal, current challenge, and optional context.
- Keep the form concise, accessible, mobile-friendly, and visually consistent with the current dark design system.
- Show a clear loading state, a tailored summary, recommended services, matched portfolio projects, and a direct next step to contact Kamyorg.
- Preserve the entered brief when errors occur and show the safe gateway error message.

## Recommendation logic
- Send only the prospect's brief to a server-side function.
- Use Lovable AI Gateway with the required `openai/gpt-6-astra` Responses API settings.
- Ground every recommendation in the existing service catalogue and four verified portfolio projects; the model cannot invent services, projects, metrics, pricing, or outcomes.
- Validate the model response on the server and map returned identifiers back to trusted local data before rendering.
- Keep the API key, prompt, and model configuration server-side.

## Files
- Add server-only AI Gateway helpers and a one-shot recommendation server function.
- Add a focused recommender component to the Services page.
- Add only the small semantic styles/tokens needed for loading, result, and error states.
- Record the AI boundary and grounding rule in the project architecture notes.

## Verification
- Run the actual recommendation flow with a realistic Shopify brief.
- Confirm matched services/projects render and project links open the verified stores.
- Confirm invalid and empty input states are handled.
- Check desktop and mobile layout, build output, and browser console.
