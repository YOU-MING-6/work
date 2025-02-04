import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://RI.youming.us.kg/work.png',

  appearance: true,

  profile: {
    name: 'YOU MING 柚明',
    description: '一个不知名创作者',
    avatar: 'https://RI.youming.us.kg/ym.png',
    location: '中国',
    organization: 'Youming 工作室',
    circle: true, // 是否为圆形头像
    layout: 'right', // 个人信息在左侧还是右侧，'left' | 'right'
  },
  // 社交链接页
  social: [
    { icon: 'github', link: 'https://github.com/YOU-MING-6/work' },
    { icon: 'qq', link: '链接.html#qq-群' },
    { icon: 'bilibili', link: 'https://space.bilibili.com/1337092956' },
    ],
  navbarSocialInclude: ['github', 'qq', 'bilibili'], // 导航栏社交链接页

  footer: { copyright: 'Copyright © 2024-present <a href="/notes/更多/工作室.html" >Youming 工作室</a>', message: '<a href="https://icp.gov.moe/?keyword=20250036" target="_blank">萌ICP备20250036号</a>' },
  
  navbar,
  notes
})
