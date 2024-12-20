import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({

  hostname: "https://work.youming.us.kg/",

  author: {
    name: "YOU MING 柚明",
    url: "/更多/工作室.html#you-ming-柚明",
    email: "",
  },

  // “编辑此页” 配置
  editLink: true,  // 是否展示编辑此页链接
  docsRepo: "https://github.com/YOU-MING-6/work",
  docsDir: "src",
  docsBranch: "main",
  lastUpdated: true,  // 是否显示页面最后更新时间
  contributors: false,  // 是否显示页面贡献者

  iconAssets: "fontawesome-with-brands",

  logo: "https://image.youming.us.kg/work.png",
  navbarTitle: '作品文档',

  repoDisplay: false,  // 是否显示导航栏 Github 或其他链接
  repo: "",  // 导航栏 Github 或其他链接

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "",
  displayFooter: true,

  // 博客相关
  blog: {
    avatar: "https://image.youming.us.kg/ym.png",
    name: "YOU MING 柚明",
    description: "一个不知名创作者",
    intro: "/更多/工作室.html#you-ming-柚明",
    medias: {
      bilibili: {
        icon: "https://image.youming.us.kg/bilibili.png",
        link: "https://space.bilibili.com/1337092956",
      },
      QQ: {
        icon: "https://image.youming.us.kg/qq.png",
        link: "https://qm.qq.com/q/K3Lqokpdm0",
      },
    },
    // 时间轴的顶部文字
    timeline: "🍀未来可期！"
  },

  // 加密配置
  encrypt: {
    config: {
      "/xxx/xxx.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "编辑此页",
    date: "创建日期"
  },

  routeLocales: {
    notFoundMsg: ["看起来你访问了一个失效的链接", "这里什么也没有", "点击「反馈中心」向我们发送此错误"],
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Outlook", "Search"],
  },

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,
    // Markdown 增强

    // 启用之前需安装 @waline/client

    comment: {
      provider: "Waline",
      serverURL: "https://waline.youming.us.kg/", // Waline评论后台
      requiredMeta: ['nick'],
      wordLimit: 2000,
      pageSize: 20,
    },

    // 公告
    notice: [
      {
        path: "/",
        title: "公告", //  标题
        content: "<h3>文档迁移通知</h3>我们已将作品文档迁移至「此」，请不要再访问旧文档。<a href='/更多/迁移公告.html'>查看迁移公告</a> <h3>新手指南</h3>第一次来这吗？点击按钮查看新手指南。",  // 公告内容
        actions: [
          {
            text: "迁移公告",  // 操作按钮内容
            link: "/更多/迁移公告.html",  // 链接
            type: "primary",  // 默认为 default 为非填充按钮，填写 primary 为填充按钮
          },
          {
            text: "新手指南",  // 操作按钮内容
            link: "/更多/指南.html",  // 链接
            type: "primary",  // 默认为 default 为非填充按钮，填写 primary 为填充按钮
          },
          {
            text: "关闭",  // 操作按钮内容
          },
        ],  // 操作按钮
        confirm: true,  // 只能点击操作按钮关闭
        fullscreen: false,  // 全屏
      },
    ],

    components: {
      components: [
        "ArtPlayer", // 一个视频播放器
        "Badge", // 支持自定义颜色的徽章
        "BiliBili", // 哔哩哔哩视频组件
        "Share", // 分享组件
        "SiteInfo", // 站点信息组件
        "VPBanner", // 横幅组件
        "VPCard", // 卡片组件
      ],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    markdownImage: {
      figure: true,
      lazyload: true,
      size: true,
    },

    // markdownMath: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
    // },

    // 此功能被开启用于演示，你应仅当使用时保留。
    markdownTab: true,
    
    markdownImages: true,

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    markdown: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      tabs: true,
      codeTabs: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tasklist: true,
      vPre: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },
});
