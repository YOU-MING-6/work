import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      comment: {
        // 选择一个评论服务
        provider: "Giscus",

        // 服务选项
        src: "https://giscus.app/client.js",
        datarepo: "YOU-MING-6/work",
        datarepoid: "R_kgDOMbX5GQ",
        datacategory: "Announcements",
        datacategoryid: "DIC_kwDOMbX5Gc4ChTVr",
        datamapping: "pathname",
        datastrict: "0",
        datareactionsenabled: "1",
        dataemitmetadata: "0",
        datainputposition: "bottom",
        datatheme: "preferred_color_scheme",
        datalang: "zh-CN",
        crossorigin: "anonymous"
      },
    },
  }),
};