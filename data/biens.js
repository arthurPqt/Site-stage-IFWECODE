import { directus } from '@/lib/directus';
import { readItems } from '@directus/sdk';

export default async function getBiensData(collection) {
  return await directus.request(
    readItems(collection, {
      fields: ["*", {fk_gallery:["*"]}] // important pour atteindre les images
    })
  );
}