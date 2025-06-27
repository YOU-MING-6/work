import { defineClientConfig } from 'vuepress/client'
// import { defineWalineConfig } from '@vuepress/plugin-comment/client' // 评论插件

import './theme/styles/custom.css'

export default defineClientConfig({
  // your custom config here
})

// export const walineConfig = defineWalineConfig({
//   serverURL: "", // Waline评论后台
//   search: false,
//   pageview: true,
//   // @ts-expect-error
//   locale: {
//     placeholder: "来发条评论吧ヾ(≧▽≦*)o （评论仅做展示，交流请到 QQ 群）",
//   },
// })
