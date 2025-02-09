import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "CH₃COOC₂H₅'s World",
      description: "",
    },
    "/en/": {
      lang: "en-US",
      title: "CH₃COOC₂H₅'s World",
      description: "",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
