import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { getDirname, path } from "vuepress/utils";

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '作品文档',
  description: 'YOU MING 的作品文档',

  // 取消灯笼装饰请删除 alias 的配置、删除本文件中第四行的内容、docs\.vuepress\theme\components\lantern.vue 的文件
  alias: {
    "@theme/Nav/VPNavBarTitle.vue": path.resolve(
      __dirname,
      "./theme/components/lantern.vue"
    ),
  },

  shouldPrefetch: true, // 是否开启预加载

  bundler: viteBundler(),

  theme: plumeTheme({
    // 添加您的部署域名
    hostname: 'https://work.youming.us.kg/',
    // your git repo url
    docsRepo: 'https://github.com/YOU-MING-6/work',
    docsDir: 'src',

    blog: false, // 是否开启博客功能

    bulletin: {
      layout: 'top-right',
      title: '',
      contentFile: path.join(__dirname, 'bulletin.md'),
    },

    plugins: {

      git: false, // git 功能

      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      shiki: {
        languages: ['shell', 'bash', 'typescript', 'javascript'],
      },

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      markdownEnhance: {
        demo: true,
      //   include: true,
      //   chart: true,
      //   echarts: true,
      //   mermaid: true,
      //   flowchart: true,
      },

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
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
        repl: {
          go: false,
          rust: false,
          kotlin: false,
        },
      },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      comment: {
        provider: "Waline",
        serverURL: "https://waline.youming.us.kg/", // Waline评论后台
        requiredMeta: ['nick'],
        wordLimit: 2000,
        pageSize: 20,
        comment: true,
      },
    },
  }),
})
