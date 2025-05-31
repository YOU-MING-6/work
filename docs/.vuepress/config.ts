import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { path } from "vuepress/utils";
// import { commentPlugin } from '@vuepress/plugin-comment' // 评论插件
// import { getDirname } from "vuepress/utils"; // 灯笼装饰

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '作品文档',
  description: 'Youming 工作室的作品文档',

  head: [
    ['link', { rel: 'icon', href: 'https://ri.youming.v6.army/docs.png' }],
  ],

  alias: {
    // 灯笼装饰（docs\.vuepress\theme\components\lantern.vue）
    // "@theme/Nav/VPNavBarTitle.vue": path.resolve(
    //   __dirname,
    //   "./theme/components/lantern.vue"
    // ),
  },

  shouldPrefetch: false, // 是否开启预加载

  bundler: viteBundler(),

  theme: plumeTheme({
    hostname: 'https://docs.youming.v6.army', // 部署域名
    
    docsRepo: 'https://github.com/YOU-MING-6/docs',
    docsDir: 'docs',

    // 贡献者
    contributors: {
      mode: 'inline',
      info: [
        {
          username: 'YOU MING 柚明', // 显示的名字
          alias: ['you-ming-6'], // 别名
        },
        {
          username: 'Afly-dream', // 显示的名字
          alias: ['Aflydream'], // 别名
        }
      ]
    },

    blog: false, // 是否开启博客功能

    bulletin: {
      layout: 'top-right',
      title: '',
      contentFile: path.join(__dirname, 'bulletin.md'),
    },

    markdown: {
      fileTree: true, // ::: file-tree  文件树容器
      plot: true, // !!plot!! 隐秘文本
      icons: true, // ::collect:name::   内联 iconify 图标
      artPlayer: true, // @[art-player](url)  嵌入 art-player 视频
      audioReader: true, // @[audio-reader](url)  嵌入 audio-reader 音频
      // pdf: true, // @[pdf](url)  嵌入 PDF 文件
      bilibili: true, // @[bilibili](bvid)  嵌入 bilibili 视频
      // youtube: true, // @[youtube](id)  嵌入 youtube 视频
      // codepen: true, // @[codepen](user/slash)  嵌入 codepen
      // replit: true, // @[replit](user/repl-name)  嵌入 Replit
      // codeSandbox: true, // @[codesandbox](id)  嵌入 CodeSandbox
      // jsfiddle: true, // @[jsfiddle](id)  嵌入 jsfiddle
      // caniuse: true, // @[caniuse](feature)  嵌入 caniuse
      // imageSize: true, // 在构建阶段为 图片添加 width/height 属性
      abbr: true, // *[缩写词]: 缩写词
      annotation: true, // [+label]: 内容注释
      codeTree: true, // ::: code-tree  代码树
      field: true, // ::: field  字段容器
      timeline: true, // ::: timeline  时间线
      collapse: true, // ::: collapse  折叠面板
      chat: true, // ::: chat  对话记录
      repl: {
        go: false,
        rust: false,
        kotlin: false,
      },
    },

    plugins: {

      git: true, // git 功能

      // Shiki 代码高亮 (内置) @vuepress-plume/plugin-shikiji
      // @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
      // 
      // shiki: {
      //   languages: ['shell', 'bash', 'typescript', 'javascript'],
      // },


      // shiki 代码高亮 @vuepress/plugin-shiki@next
      // @see https://theme-plume.vuejs.press/guide/code/intro/
      // https://ecosystem.vuejs.press/zh/plugins/markdown/shiki.html
      // 


      // markdown enhance
      // @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/

      markdownEnhance: {
        demo: true,
      //   include: true,
      //   chart: true,
      //   echarts: true,
      //   mermaid: true,
      //   flowchart: true,
      },


      // 评论 comments
      // @see https://theme-plume.vuejs.press/guide/features/comments/

      comment: {
        // provider: "Waline",
        // serverURL: "", // Waline评论后台
        // requiredMeta: ['nick'],
        // emoji: false,
        // reaction: [],
        // wordLimit: 2000,
        // pageSize: 20,
        // pageview: false,
        // comment: true,
      },

      // 水印
      // watermark: {
      //   // enabled: false,  // boolean 类型控制是否全局启用
      //   enabled: page => true, // function 类型 过滤哪些页面启用水印
      //   delay: 500, // 添加水印的延时。以毫秒为单位。
      //   // 是否全屏水印，默认为 `true`，
      //   // 设置为 `false` 时，水印仅在 内容区域中显示。
      //   fullPage: true,
      //   /** @see https://zhensherlock.github.io/watermark-js-plus/zh/config/ */
      //   watermarkOptions: {
      //     content: 'Youming 工作室',
      //   },
      // },
    },
  }),
})
