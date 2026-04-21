import {directus} from '@/lib/directus'
import { readItems } from '@directus/sdk';

export default async function getSingletonData (collection){

return await directus.request(
  readItems(collection, {
    
  })
);
}

