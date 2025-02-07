import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "文章",
      icon: "book",
      prefix: "articles/",
      link: "articles/",
      children: "structure",
    },
    {
      text: "友情链接",
      icon: "link",
      prefix: "friend-link/",
      link: "friend-link/",
    },
    // {
    //   text: "随手帖",
    //   icon: "pen-to-square",
    //   prefix: "posts/",
    //   children: "structure",
    // },
    "intro",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
