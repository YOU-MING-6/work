import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNotes = defineNoteConfig({
  dir: '',
  link: '/',
  sidebar: [
    {
      text: '作品文档',
      prefix: '',
      items: [
        { text: '导航', link: '/notes/'},
        {
          text: 'YM 作品项目',
          icon: 'mingcute:book-line',
          collapsed: false,
          prefix: '',
          items: [
            { text: 'MC 鼠标指针', link: 'MC-鼠标指针'},
            { text: 'Floating OS', link: 'Floating-OS'},
            { text: 'MC-片头&尾', link: 'MC-片头-尾'}
          ]
        },
        {
          text: 'YM PPT项目',
          icon: 'mingcute:chart-pie-line',
          collapsed: false,
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
          icon: 'mingcute:earth-line',
          collapsed: false,
          prefix: '',
          items: [
            { text: '柚明主页', link: '柚明主页'},
            { text: '作品文档', link: '作品文档'}
          ]
        },
      ]
    },
    {
      text: '更多',
      collapsed: false,
      prefix: '',
      items: [
        { text: '公告', link: '/公告.html'},
        { text: '工作室', link: '更多/工作室.html'},
        { text: '社交链接页', link: '/链接.html'}
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
        {
          text: 'YM 作品项目',
          icon: 'mingcute:book-line',
          collapsed: false,
          prefix: '',
          items: [
            { text: 'MC 鼠标指针', link: 'MC-鼠标指针'},
            { text: 'Floating OS', link: 'Floating-OS'},
            { text: 'MC-片头&尾', link: 'MC-片头-尾'}
          ]
        },
        {
          text: 'YM PPT项目',
          icon: 'mingcute:chart-pie-line',
          collapsed: false,
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
          icon: 'mingcute:earth-line',
          collapsed: false,
          prefix: '',
          items: [
            { text: '柚明主页', link: '柚明主页'},
            { icon: 'mingcute:book-2-line', text: '作品文档', link: '/notes/更多/更新日志.html'}
          ]
        },
      ]
    },
    {
      text: '更多',
      collapsed: false,
      prefix: '',
      items: [
        { text: '主文档', link: '/notes/MC-鼠标指针'},
        { text: '社交链接页', link: '/链接.html'}
      ]
    },
  ],
})

const demofeedback = defineNoteConfig({
  dir: '/notes/反馈中心',
  link: '/notes/反馈中心',
  sidebar: [
    {
      text: '反馈中心',
      prefix: '',
      items: [
        { text: '导航', link: '/notes/反馈中心/'},
        { text: '反馈', link: '反馈'},
        { text: '发送灵感', link: '发送灵感'},
        { text: '发送授权申请', link: '发送授权申请'},
        { text: '举报违规行为', link: '举报违规行为'}
      ]
    },
    {
      text: '协议',
      items: [
        { text: '开源作品使用权限协议', link: '/notes/协议/开源.html'},
        { text: '非开源作品授权协议', link: '/notes/协议/申请.html'},
        { text: '闭源作品使用权限协议', link: '/notes/协议/闭源.html'},
        { text: '转载文章内容协议', link: '/notes/协议/转载.html'},
      ]
    },
    {
      text: '更多',
      collapsed: false,
      prefix: '',
      items: [
        { text: '主文档', link: '/notes/MC-鼠标指针'},
        { text: '社交链接页', link: '/链接.html'}
      ]
    },
  ],
})

const demoagreement = defineNoteConfig({
  dir: '/notes/协议',
  link: '/notes/协议',
  sidebar: [
    {
      text: '反馈中心',
      prefix: '',
      items: [
        { text: '反馈中心', link: '/notes/反馈中心/'}
      ]
    },
    {
      text: '协议',
      items: [
        { text: '开源作品使用权限协议', link: '开源.html'},
        { text: '非开源作品授权协议', link: '申请.html'},
        { text: '闭源作品使用权限协议', link: '闭源.html'},
        { text: '转载文章内容协议', link: '/notes/协议/转载.html'},
      ],
    },
    {
      text: '更多',
      collapsed: false,
      prefix: '',
      items: [
        { text: '主文档', link: '/notes/MC-鼠标指针'},
        { text: '社交链接页', link: '/链接.html'}
      ]
    },
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
        { text: '工作室 成员', link: '/friends/', icon: 'mingcute:contacts-3-line'},
        { icon: 'mingcute:history-anticlockwise-line', text: '更新日志', link: '更新日志'},
      ]
    },
    {
      text: '更多',
      collapsed: false,
      prefix: '',
      items: [
        { text: '主文档', link: '/notes/MC-鼠标指针'},
        { text: '社交链接页', link: '/链接.html'}
      ]
    },
  ],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNotes,demoHistory,demofeedback,demoagreement,demoMore],
})
