import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://ri.youming.v6.army/docs.png',

  appearance: true,

  profile: {
    name: 'YOU MING 柚明',
    description: '一个不知名创作者',
    avatar: 'https://ri.youming.v6.army/ym.png',
    location: '中国',
    organization: 'Youming 工作室',
    circle: true, // 是否为圆形头像
    layout: 'right', // 个人信息在左侧还是右侧，'left' | 'right'
  },
  // 社交链接
  social: [
    { icon: 'github', link: 'https://github.com/YOU-MING-6/docs' },
    { icon: 'qq', link: '链接.html#qq-群' },
    { icon: 'bilibili', link: 'https://space.bilibili.com/1337092956' },
    ],
  navbarSocialInclude: ['github', 'qq', 'bilibili'], // 导航栏社交链接

  footer: {
    message: 'Powered by <a href="https://theme-plume.vuejs.press/" target="_blank">vuepress-theme-plume</a> - <a href="https://icp.gov.moe/?keyword=20250036" target="_blank">萌ICP备20250036号</a> - <a href="https://web.youming.v6.army" target="_blank">YM 站点监控</a>',
    copyright: 'Copyright © 2022-present <a href="/notes/更多/工作室.html">Youming 工作室</a>'
  },
  
  navbar,
  notes
})
