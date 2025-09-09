function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}
function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the the config instantiated in /.eleventy.js.
  // Feel free to add any plugin you want here instead of /.eleventy.js
    eleventyConfig.addPassthroughCopy("netlify/functions/*.js");
  eleventyConfig.addPassthroughCopy("user.json");
}

module.exports = function(eleventyConfig) {
  return {
    dir: {
      output: "_site"  // or another folder name like "dist"
    }
  };
};

exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
