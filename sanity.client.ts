import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/types';

// Ensure the environment variables are loaded
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION as string;

export const client = createClient({
  projectId,
  dataset,
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion,   // Set API version to match Sanity config
});

const builder: ImageUrlBuilder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
