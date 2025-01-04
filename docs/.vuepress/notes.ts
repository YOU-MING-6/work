import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNotes = defineNoteConfig({
  dir: '',
  link: '/',
  sidebar: [
    {
      text: 'YM 作品项目',
      prefix: '',
      items: [
        { text: 'MC 鼠标指针', link: 'MC-鼠标指针'},
        { text: 'Floating OS', link: 'Floating-OS'},
        { text: 'MC-片头&尾', link: 'MC-片头-尾'}
      ]
    },
    {
      text: 'YM PPT项目',
      prefix: '',
      items: [
        { text: 'Mindows11', link: 'Mindows11'},
        { text: 'YM 虚拟机', link: 'YM-虚拟机'},
        { text: 'YM 安全中心', link: 'YM-安全中心'},
        { text: 'Yormong OS', link: 'Yormong-OS'},
        { text: 'Yormong OS NEXT', link: 'Yormong-OS-NEXT'}
      ]
    },
    {
      text: 'YM 网站项目',
      prefix: '',
      items: [
        { text: '柚明主页', link: '柚明主页'},
        { text: '作品文档', link: '作品文档'}
      ]
    },
  ],
})

const demoHistory = defineNoteConfig({
  dir: '/notes/更新历史',
  link: '/notes/更新历史',
  sidebar: [
    {
      text: '更新历史',
      prefix: '',
      items: [
        { text: 'MC 鼠标指针', link: 'MC-鼠标指针'},
        { text: 'Floating OS', link: 'Floating-OS'},
        { text: 'MC-片头&尾', link: 'MC-片头-尾'},
        { text: 'Mindows11', link: 'Mindows11'},
        { text: 'YM 虚拟机', link: 'YM-虚拟机'},
        { text: 'YM 安全中心', link: 'YM-安全中心'},
        { text: 'Yormong OS', link: 'Yormong-OS'},
        { text: 'Yormong OS NEXT', link: 'Yormong-OS-NEXT'},
        { text: '柚明主页', link: '柚明主页'},
        { text: '作品文档', link: '作品文档'}
      ]
    }
  ],
})

const demofeedback = defineNoteConfig({
  dir: '/notes/反馈中心',
  link: '/notes/反馈中心',
  sidebar: [
    {
      text: '反馈',
      prefix: '',
      items: [
        { text: '导航', link: '/notes/反馈中心/'},
        { text: '反馈', link: '反馈'},
        { text: '发送灵感', link: '发送灵感'},
        { text: '申请编辑发布权', link: '申请编辑发布权'},
        { text: '举报违规行为', link: '举报违规行为'}
      ]
    },
    {
      text: '留言',
      prefix: '',
      items: [
        { text: '留言板', link: '留言板'}
      ]
    }
  ],
})

const demoMore = defineNoteConfig({
  dir: '/notes/更多',
  link: '/notes/更多',
  sidebar: [
    {
      text: '关于',
      prefix: '',
      items: [
        { text: '工作室', link: '工作室'},
        { text: '更新日志', link: '更新日志'}
      ]
    },
  ],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNotes,demoHistory,demofeedback,demoMore],
})
