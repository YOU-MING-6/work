import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "作品文档",
    icon: "book",
    prefix: "/",
    children: [
      {
        text: "导航",
        prefix: "作品文档/",
        children: [
          { text: "作品文档 - 导航", icon: "signs-post", link: "" },
        ],
      },
      {
        text: "作品",
        prefix: "作品文档/",
        children: [
          { text: "MC 鼠标指针", icon: "arrow-pointer", link: "MC 鼠标指针" },
        ],
      },
      {
        text: "系统",
        prefix: "作品文档/",
        children: [
          { text: "Mindows11", icon: "display", link: "Mindows11" },
          { text: "Yormong OS", icon: "display", link: "Yormong OS" },
          { text: "Yormong OS NEXT", icon: "display", link: "Yormong OS NEXT" },
        ],
      },
      {
        text: "软件",
        prefix: "作品文档/",
        children: [
          { text: "YM 虚拟机", icon: "hard-drive", link: "YM 虚拟机" },
          { text: "YM 安全中心", icon: "shield", link: "YM 安全中心" },
        ],
      },
      {
        text: "当前",
        prefix: "作品文档/",
        children: [
          { text: "我们在干什么", icon: "hard-drive", link: "do" },
        ],
      },
    ],
  },
  { text: "更新历史", link: "/作品更新历史/", icon: "clock-rotate-left" },
  {
    text: "反馈中心",
    icon: "envelopes-bulk",
    prefix: "/",
    children: [
      {
        text: "导航",
        prefix: "反馈中心/",
        children: [
          { text: "反馈中心 - 导航", icon: "signs-post", link: "" },
        ],
      },
      {
        text: "反馈与举报",
        prefix: "反馈中心/",
        children: [
          { text: "反馈", icon: "envelope", link: "反馈" },
          { text: "发送灵感", icon: "lightbulb", link: "发送灵感" },
          { text: "申请编辑发布权", icon: "key", link: "申请编辑发布权" },
          { text: "举报违规行为", icon: "triangle-exclamation", link: "举报违规行为" },
        ],
      }
    ],
  },
  {
    text: "更多",
    icon: "signs-post",
    prefix: "/",
    children: [
      {
        text: "个人",
        prefix: "",
        children: [
          { text: "个人页", icon: "compass", link: "intro.html" },
        ],
      },
      {
        text: "列表",
        prefix: "",
        children: [
          { text: "文章列表", icon: "list-ul", link: "article/" },
          { text: "星标文章列表", icon: "star", link: "star/" },
          { text: "时间线列表", icon: "timeline", link: "timeline/" },
        ],
      },
      {
        text: "分类与标签",
        prefix: "",
        children: [
          { text: "分类地图页", icon: "diagram-project", link: "category/" },
          { text: "标签地图页", icon: "tag", link: "tag/" },
        ],
      },
    ],
  },
  { text: "关于", link: "/关于/", icon: "circle-info" },
]);