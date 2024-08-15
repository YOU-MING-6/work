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
          { text: "作品文档 - 导航", icon: "list-ul", link: "" },
        ],
      },
      {
        text: "YM 作品项目",
        prefix: "作品文档/",
        children: [
          { text: "MC 鼠标指针", icon: "arrow-pointer", link: "MC 鼠标指针" },
          { text: "Floating OS", icon: "computer", link: "Floating OS" },
        ],
      },
      {
        text: "YM PPT项目",
        prefix: "作品文档/",
        children: [
          { text: "Mindows11", icon: "person-chalkboard", link: "Mindows11" },
          { text: "Yormong OS", icon: "person-chalkboard", link: "Yormong OS" },
          { text: "Yormong OS NEXT", icon: "person-chalkboard", link: "Yormong OS NEXT" },
          { text: "YM 虚拟机", icon: "hard-drive", link: "YM 虚拟机" },
          { text: "YM 安全中心", icon: "shield", link: "YM 安全中心" },
        ],
      },
      {
        text: "YM 网站项目",
        prefix: "作品文档/",
        children: [
          { text: "柚明主页", icon: "home", link: "柚明主页" },
          { text: "作品文档", icon: "book", link: "作品文档" },
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
  { text: "更新历史", link: "/更新历史/", icon: "clock" },
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
          { text: "留言板", icon: "message", link: "留言板" },
          { text: "反馈", icon: "envelope", link: "反馈" },
          { text: "发送灵感", icon: "lightbulb", link: "发送灵感" },
          { text: "申请编辑发布权", icon: "key", link: "申请编辑发布权" },
          { text: "举报违规行为", icon: "triangle-exclamation", link: "举报违规行为" },
        ],
      },
      {
        text: "联系我们",
        children: [
          { text: "QQ 群", icon: "message", link: "https://qm.qq.com/q/skpMjXw7xm" },
        ],
      }
    ],
  },
  { text: "留言板", icon: "message", link: "/反馈中心/留言板.html" },
  {
    text: "更多",
    icon: "bars",
    prefix: "/",
    children: [
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
      {
        text: "更多",
        prefix: "/",
        children: [
          { text: "关于", link: "更多/", icon: "circle-info" },
          { text: "关于工作室", link: "更多/工作室.html", icon: "home" },
          { text: "指南", link: "更多/指南.html", icon: "compass" },
          { text: "问题排查", link: "更多/问题排查.html", icon: "circle-question" },
        ],
      },
      {
        text: "个人",
        prefix: "/",
        children: [
          { text: "个人页", link: "intro.html", icon: "user" },
        ],
      },
    ],
  },
  { text: "QQ 群", icon: "user-group", link: "https://qm.qq.com/q/skpMjXw7xm" },
]);