import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "": [
    "/",
    {
      text: "作品文档",
      icon: "book",
      prefix: "/作品文档/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "更新历史",
      icon: "clock-rotate-left",
      prefix: "/作品更新历史/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "反馈中心",
      icon: "envelopes-bulk",
      prefix: "/反馈中心/",
      collapsible: true,
      children: "structure",
    },
  ],
});