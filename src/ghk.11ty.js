// ghk.11ty.js

module.exports = {
  permalink: "/ghk.json",
  eleventyExcludeFromCollections: true,
  data: {
    secret: "mySnOnbH9729",
    usersData: {
      "users": [
        { "AuthName": "Lukas", "ID": "aJ862m" },
        { "AuthName": "Achilles", "ID": "28jd67" },
        { "AuthName": "Ulrich", "ID": "bPqy2" },
        { "AuthName": "Alfonso", "ID": "bmNa3" },
        { "AuthName": "CJ", "ID": "yzouaV" },
        { "AuthName": "Aldrin", "ID": "MoJja" },
        { "AuthName": "Nico", "ID": "miPat" },
        { "AuthName": "Jhun", "ID": "HaiYa" },
        { "AuthName": "Chase", "ID": "JapuZ" },
        { "AuthName": "Von", "ID": "MpzIay" },
        { "AuthName": "Zairon", "ID": "MpaouG" },
        { "AuthName": "Sophia", "ID": "GkIau" },
        { "AuthName": "Jairah", "ID": "GaodlS" },
        { "AuthName": "Rieyana", "ID": "GopaEs" },
        { "AuthName": "Izz", "ID": "GpOaj" },
        { "AuthName": "Danielle", "ID": "GpOjao" },
        { "AuthName": "LA", "ID": "GUayks" },
        { "AuthName": "Elisha", "ID": "GiaoAe" },
        { "AuthName": "Cathryn", "ID": "GhUsla" },
        { "AuthName": "Simer", "ID": "GoHaoy" },
        { "AuthName": "JM", "ID": "GhGsg" },
        { "AuthName": "Patricia", "ID": "GqiuZk" },
        { "AuthName": "Nathalie", "ID": "Gkals" },
        { "AuthName": "Hancyn", "ID": "GmLaor" },
        { "AuthName": "Thea", "ID": "GuOans" },
        { "AuthName": "Anikka", "ID": "GbaY6" },
        { "AuthName": "Akilah", "ID": "Gp8iqy" },
        { "AuthName": "Jazmine", "ID": "GyIaksY" },
        { "AuthName": "Eloisa", "ID": "GyUikGd" },
        { "AuthName": "Vien", "ID": "GpIsuje" },
        { "AuthName": "Yazmine", "ID": "GvUyanm" },
        { "AuthName": "Claire", "ID": "GGiaoi" },
        { "AuthName": "Fionna", "ID": "GjuHAl" },
        { "AuthName": "Ryden", "ID": "oUGmae" },
        { "AuthName": "Patrish", "ID": "GJousUy" },
        { "AuthName": "Rianne", "ID": "GmohUs" },
        { "AuthName": "Niña", "ID": "GhuOse" },
        { "AuthName": "Chersel", "ID": "GjOauw" },
        { "AuthName": "Matthew", "ID": "B-9" }
      ],
      "masterPIN": "926226"
    }
  },
  render: function(data) {
    const url = data.page.url || "";
    const query = new URLSearchParams(url.split("?")[1]);
    const key = query.get("key");

    if (key === data.secret) {
      return JSON.stringify(data.usersData.users, null, 2);
    } else {
      return JSON.stringify({ error: "Access denied" }, null, 2);
    }
  }
};
