import "tsx/esm";
import { EleventyRenderPlugin } from "@11ty/eleventy";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPassthroughCopy({ 'src/assets/favicon': '/' });

  return {
    dir: {
      input: "src",
    },
  }
}
