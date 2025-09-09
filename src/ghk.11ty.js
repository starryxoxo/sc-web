// ghk.11ty.js
const users = require(".../.../_data/user.json");

module.exports = {
  permalink: "/ghk.json",
  eleventyExcludeFromCollections: true,
  data: {
    secret: "mySnOnbH9729"
  },
  render: function(data) {
    const url = data.page.url || "";
    const query = new URLSearchParams(url.split("?")[1]);
    const key = query.get("key");

    if (key === data.secret) {
      return JSON.stringify(users.users, null, 2);
    } else {
      return JSON.stringify({ error: "Access denied" }, null, 2);
    }
  }
};