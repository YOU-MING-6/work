import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "作品文档",
  description: "柚明︱作品文档📗",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,

  plugins: [
    searchProPlugin({
      indexContent: true,
      autoSuggestions: false,
      queryHistoryCount: 1,
      resultHistoryCount: 1
    }),
  ],
});