import { createDirectus, staticToken, rest } from '@directus/sdk';
export const directus = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL)
  .with(staticToken(process.env.DIRECTUS_TOKEN))
  .with(rest());