import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "": [
    "/",
    {
      text: "作品文档",
      icon: "book",
      prefix: "/作品文档/",
      collapsible: true,  // 可折叠
      children: "structure",
    },
    {
      text: "更新历史",
      icon: "clock",
      prefix: "/更新历史/",
      collapsible: true,  // 可折叠
      children: "structure",
    },
    {
      text: "反馈中心",
      icon: "envelopes-bulk",
      prefix: "/反馈中心/",
      collapsible: true,  // 可折叠
      children: "structure",
    },
    {
      text: "更多",
      icon: "bars",
      prefix: "/更多/",
      collapsible: true,  // 可折叠
      children: "structure",
    },
  ],
});