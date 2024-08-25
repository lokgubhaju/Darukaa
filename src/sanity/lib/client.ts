import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const sanityClient = createClient({
  projectId: "jdy104tt",
  dataset: "production",
  apiVersion: "2023-08-17",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
