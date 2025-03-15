import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { path } from "vuepress/utils";
import { commentPlugin } from '@vuepress/plugin-comment' // 评论插件
// import { getDirname } from "vuepress/utils"; // 灯笼装饰

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '作品文档',
  description: 'Youming 工作室的作品文档',

  head: [
    ['link', { rel: 'icon', href: 'https://ri.youming.v6.army/work.png' }],
  ],

  // 取消灯笼装饰请删除 alias 的配置、删除本文件中第四行的内容、docs\.vuepress\theme\components\lantern.vue 的文件
  // alias: {
  //   "@theme/Nav/VPNavBarTitle.vue": path.resolve(
  //     __dirname,
  //     "./theme/components/lantern.vue"
  //   ),
  // },

  shouldPrefetch: false, // 是否开启预加载

  bundler: viteBundler(),

  theme: plumeTheme({
    // 添加您的部署域名
    hostname: 'https://work.youming.v6.army',
    
    // docsRepo: '',
    // docsDir: '',

    blog: false, // 是否开启博客功能

    bulletin: {
      layout: 'top-right',
      title: '',
      contentFile: path.join(__dirname, 'bulletin.md'),
    },

    plugins: {

      git: false, // git 功能

      // Shiki 代码高亮
      // @see https://theme-plume.vuejs.press/config/plugins/code-highlight/

      shiki: {
        languages: ['shell', 'bash', 'typescript', 'javascript'],
      },


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


      // markdown power
      // @see https://theme-plume.vuejs.press/config/plugin/markdown-power/

      markdownPower: {
        fileTree: true, // :::file-tree  文件树容器
        plot: true, // !!plot!! 隐秘文本
        icons: true, // :[collect:name]:   内联 iconify 图标
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
        abbr: true, // *[缩写词]: 描述 缩写
        annotation: true, // [+label]: 内容 注解
        repl: {
          go: false,
          rust: false,
          kotlin: false,
        },
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
