import "tsx/esm";
import { EleventyRenderPlugin } from "@11ty/eleventy";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addGlobalData("site", {
    url: "https://m.ryoikarashi.com",
  });
  eleventyConfig.addPassthroughCopy({ 'src/assets/favicon': '/' })
  eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' })

  return {
    dir: {
      input: "src",
    },
  }
}
