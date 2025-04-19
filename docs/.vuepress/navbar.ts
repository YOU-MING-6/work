import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/', icon: 'mingcute:home-4-line' },
  {
    text: '作品文档',
    icon: 'mingcute:book-2-line',
    items: [
      {
        text: '导航',
        link: '/notes/',
        icon: 'mingcute:navigation-line',
      },
      {
        text: 'YM 作品项目',
        icon: 'mingcute:book-line',
        items: [
          {
            text: 'MC 鼠标指针',
            link: '/notes/MC-鼠标指针.html',
            icon: 'mingcute:mouse-line',
          },
          {
            text: 'Floating OS',
            link: '/notes/Floating-OS.html',
            icon: 'mingcute:album-line',
          },
          {
            text: 'MC-片头&尾',
            link: '/notes/MC-片头-尾.html',
            icon: 'mingcute:video-line',
          },
        ],
      },
      {
        text: 'YM PPT项目',
        icon: 'mingcute:chart-pie-line',
        items: [
          {
            text: 'Mindows11',
            link: '/notes/Mindows11.html',
            icon: 'mingcute:layout-grid-line',
            badge: { text: '停止支持', type: 'danger' },
          },
          {
            text: 'YM 虚拟机',
            link: '/notes/YM-虚拟机.html',
            icon: 'mingcute:chart-pie-2-line',
          },
          {
            text: 'YM 安全中心',
            link: '/notes/YM-安全中心.html',
            icon: 'mingcute:safety-certificate-line',
          },
          {
            text: 'Yormong OS',
            link: '/notes/Yormong-OS.html',
            icon: 'mingcute:classify-3-line',
          },
          {
            text: 'Yormong OS NEXT',
            link: '/notes/Yormong-OS-NEXT.html',
            icon: 'mingcute:round-line',
          },
        ],
      },
      {
        text: 'YM 网站项目',
        icon: 'mingcute:earth-line',
        items: [
          {
            text: '柚明主页',
            link: '/notes/柚明主页.html',
            icon: 'mingcute:home-4-line',
            badge: { text: '停止支持', type: 'danger' },
          },
          {
            text: '作品文档',
            link: '/notes/作品文档.html',
            icon: 'mingcute:book-2-line',
          },
        ],
      }
    ],
  },
  {
    text: '更新历史',
    icon: 'mingcute:history-anticlockwise-line',
    items: [
      {
        text: 'YM 作品项目',
        icon: 'mingcute:book-line',
        items: [
          {
            text: 'MC 鼠标指针',
            link: '/notes/更新历史/MC-鼠标指针.html',
            icon: 'mingcute:mouse-line',
          },
          {
            text: 'Floating OS',
            link: '/notes/更新历史/Floating-OS.html',
            icon: 'mingcute:album-line',
          },
          {
            text: 'MC-片头&尾',
            link: '/notes/更新历史/MC-片头-尾.html',
            icon: 'mingcute:video-line',
          },
        ],
      },
      {
        text: 'YM PPT项目',
        icon: 'mingcute:chart-pie-line',
        items: [
          {
            text: 'Mindows11',
            link: '/notes/更新历史/Mindows11.html',
            icon: 'mingcute:layout-grid-line',
            badge: { text: '停止支持', type: 'danger' },
          },
          {
            text: 'YM 虚拟机',
            link: '/notes/更新历史/YM-虚拟机.html',
            icon: 'mingcute:chart-pie-2-line',
          },
          {
            text: 'YM 安全中心',
            link: '/notes/更新历史/YM-安全中心.html',
            icon: 'mingcute:safety-certificate-line',
          },
          {
            text: 'Yormong OS',
            link: '/notes/更新历史/Yormong-OS.html',
            icon: 'mingcute:classify-3-line',
          },
          {
            text: 'Yormong OS NEXT',
            link: '/notes/更新历史/Yormong-OS-NEXT.html',
            icon: 'mingcute:round-line',
          },
        ],
      },
      {
        text: 'YM 网站项目',
        icon: 'mingcute:earth-line',
        items: [
          {
            text: '柚明主页',
            link: '/notes/更新历史/柚明主页.html',
            icon: 'mingcute:home-4-line',
            badge: { text: '停止支持', type: 'danger' },
          },
          {
            text: '作品文档',
            link: '/notes/更多/更新日志.html',
            icon: 'mingcute:book-2-line',
          },
        ],
      }
    ],
  },
  {
    text: '反馈中心',
    icon: 'mingcute:mail-line',
    items: [
      {
        text: '反馈',
        items: [
          {
            text: '导航',
            link: '/notes/反馈中心/',
            icon: 'mingcute:navigation-line',
          },
          {
            text: '反馈',
            link: '/notes/反馈中心/反馈.html',
            icon: 'mingcute:mail-open-line',
          },
          {
            text: '发送灵感',
            link: '/notes/反馈中心/发送灵感.html',
            icon: 'mingcute:bulb-line',
          },
          {
            text: '发送授权申请',
            link: '/notes/反馈中心/发送授权申请.html',
            icon: 'mingcute:key-2-line',
          },
          {
            text: '举报违规行为',
            link: '/notes/反馈中心/举报违规行为.html',
            icon: 'mingcute:alert-line',
          }
        ],
      },
      {
        text: '协议',
        items: [
          {
            text: '开源作品使用权限协议',
            link: '/notes/协议/开源.html',
            icon: 'mingcute:pencil-3-line',
          },
          {
            text: '非开源作品使用授权协议',
            link: '/notes/协议/申请.html',
            icon: 'mingcute:lock-line',
          },
          {
            text: '闭源作品使用权限协议',
            link: '/notes/协议/闭源.html',
            icon: 'mingcute:forbid-circle-line',
          },
          {
            text: '转载文章内容协议',
            link: '/notes/协议/转载.html',
            icon: 'mingcute:share-3-line',
          },
        ],
      },
    ],
  },
  {
    text: '更多',
    icon: 'mingcute:more-3-line',
    items: [
      {
        text: '公告与帮助',
        items: [
          {
            text: '公告',
            link: '/公告.html',
            icon: 'mingcute:horn-2-line',
          },
          {
            text: '指南',
            link: '/指南.html',
            icon: 'mingcute:compass-3-line',
          },
        ],
      },
      {
        text: '协议',
        items: [
          {
            text: '开源作品使用权限协议',
            link: '/notes/协议/开源.html',
            icon: 'mingcute:pencil-3-line',
          },
          {
            text: '非开源作品使用授权协议',
            link: '/notes/协议/申请.html',
            icon: 'mingcute:key-2-line',
          },
          {
            text: '闭源作品使用权限协议',
            link: '/notes/协议/闭源.html',
            icon: 'mingcute:forbid-circle-line',
          },
          {
            text: '转载文章内容协议',
            link: '/notes/协议/转载.html',
            icon: 'mingcute:share-3-line',
          },
        ],
      },
      {
        text: '关于',
        items: [
          {
            text: '工作室',
            link: '/notes/更多/工作室.html',
            icon: 'https://ri.youming.v6.army/ym-work-icon.svg',
          },
          {
            text: '此网站',
            link: '/notes/作品文档.html',
            icon: 'mingcute:book-2-line',
          },
          {
            text: '更新日志',
            link: '/notes/更多/更新日志.html',
            icon: 'mingcute:history-anticlockwise-line',
          },
          {
            text: '工作室 成员',
            link: '/friends/',
            icon: 'mingcute:contacts-3-line',
          }
        ],
      },
      {
        text: '链接',
        items: [
          {
            text: '社交链接页',
            link: '/链接.html',
            icon: 'mingcute:link-2-line',
          }
        ],
      },
    ],
  },
])
