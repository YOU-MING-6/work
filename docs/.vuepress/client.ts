import { h } from 'vue'
import { Layout } from 'vuepress-theme-plume/client'
import { defineClientConfig } from 'vuepress/client'
import SidebarNav from './theme/components/SidebarNav.vue'
import DocFooterNav from './theme/components/DocFooterNav.vue'
import MetaAfterNav from './theme/components/MetaAfterNav.vue'
import './theme/styles/custom.css'

export default defineClientConfig({
  // 控制台输出信息
  setup() {
    console.info(`\n  ██╗   ██╗ ██████╗ ██╗   ██╗    ███╗   ███╗██╗███╗   ██╗ ██████╗     \n  ╚██╗ ██╔╝██╔═══██╗██║   ██║    ████╗ ████║██║████╗  ██║██╔════╝     \n   ╚████╔╝ ██║   ██║██║   ██║    ██╔████╔██║██║██╔██╗ ██║██║  ███╗    \n    ╚██╔╝  ██║   ██║██║   ██║    ██║╚██╔╝██║██║██║╚██╗██║██║   ██║    \n     ██║   ╚██████╔╝╚██████╔╝    ██║ ╚═╝ ██║██║██║ ╚████║╚██████╔╝    \n     ╚═╝    ╚═════╝  ╚═════╝     ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝     \n `)
    console.log('文档已加载，页面马上就好了！')
    console.info('版本: 2.0.0') 
  },
  layouts: {
    Layout: h(Layout, null, {
      'sidebar-nav-after': () => h(SidebarNav),
      'doc-footer-before': () => h(DocFooterNav),
      'doc-meta-after': () => h(MetaAfterNav),
    }),
  },
})
