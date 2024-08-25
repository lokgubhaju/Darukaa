/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export const dynamic = 'force-static'

export const generateStaticParams = async () => {
  // **1. Determine Possible URL Structures**
  //    - How many URL segments can your Sanity Studio routes have?
  //    - Example: If your studio has routes like /studio/desk, /studio/settings, etc., 
  //               you'll need to generate those combinations.

  // **2. Fetch Data (If Needed)**
  //    - Do you need to fetch data from an API to determine valid routes?

  // **3. Return an Array of Route Parameters**
  return [
    { tool: ['desk'] }, 
    { tool: ['settings'] },
    // ... more routes as needed
  ];
};

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return <NextStudio config={config} />
}
