import { createRouteHandler } from "uploadthing/next";
 
import { NovelFileRouter, ourFileRouter } from "./core";
 
// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: NovelFileRouter,
 
  // Apply an (optional) custom config:
  config: { 
    uploadthingId: process.env.UPLOADTHING_APP_ID,
    uploadthingSecret: process.env.UPLOADTHING_SECRET
   },
});