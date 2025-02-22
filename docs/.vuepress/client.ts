import { defineClientConfig } from 'vuepress/client'
import { defineWalineConfig } from '@vuepress/plugin-comment/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

// import CustomComponent from './theme/components/Custom.vue'

import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    // built-in components
    // app.component('RepoCard', RepoCard)
    // app.component('NpmBadge', NpmBadge)
    // app.component('NpmBadgeGroup', NpmBadgeGroup)
    // app.component('Swiper', Swiper) // you should install `swiper`

    // your custom components
    // app.component('CustomComponent', CustomComponent)
  },
})

export const walineConfig = defineWalineConfig({
  serverURL: "https://waline.youming.us.kg/", // Waline评论后台
  search: false,
  pageview: true,
  // @ts-expect-error
  locale: {
    placeholder: "来发条评论吧ヾ(≧▽≦*)o （评论仅做展示，交流请到 QQ 群）",
  },
})
