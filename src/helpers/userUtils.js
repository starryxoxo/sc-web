// Put your computations here.

function userComputed(data) {
  return {};
}

exports.userComputed = userComputed;

module.exports = function(eleventyConfig) {
  return {
    dir: {
      output: "_site"  // or another folder name like "dist"
    }
  };
};
