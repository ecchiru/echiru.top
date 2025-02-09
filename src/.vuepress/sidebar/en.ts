import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "Articles",
      icon: "book",
      prefix: "articles/",
      link: "articles/",
      children: "structure",
    },
    {
      text: "Friend Links",
      icon: "link",
      prefix: "friend-links/",
      link: "friend-links/",
    },
    "intro",
    // {
    //   text: "Slides",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
