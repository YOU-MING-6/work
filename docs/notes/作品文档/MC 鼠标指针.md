---
title: MC 鼠标指针
author: YOU MING 柚明
icon: mingcute:cursor-3-line
createTime: 2023/02
tags:
  - 正在更新
  - YM-作品项目
  - 开源
permalink: /notes/MC-鼠标指针.html
---

<style>
  .light-theme-image { 
    display: block !important; 
  }
  .dark-theme-image { 
    display: none !important; 
  }
  html.dark .light-theme-image { 
    display: none !important; 
  }
  html.dark .dark-theme-image { 
    display: block !important; 
  }
</style>

<!-- 根据网站主题切换图片 -->
<div class="light-theme-image">
  <img src="/rc/sbzz.png">
</div>
<div class="dark-theme-image">
  <img src="/rc/sbzz-dark.png">
</div>

## ::mingcute:document-line:: 简介

==MC 鼠标指针== 是一个由 [YOU MING 柚明](/notes/更多/工作室.html#you-ming-柚明) 于 ==2023.2=={.info} 开始制作的一个 ==鼠标指针=={.info} 。  
（本文的 “鼠标指针” 指的是 鼠标光标。）

- 使用了 ==「新版 MC 材质」=={.info} 制作，~~而不是网上的 老版材质~~；
- 还有一部分鼠标是动态的；
- 在 ==1.2=={.info} 版本中，支持了右键自动安装（.inf）；
- 在鼠标文件 ==忙.ani=={.info} 中，使用了超过 60 帧的动画；
- 你还可以按 ==文件名=={.info}  进行 ==手动设置=={.info} 鼠标光标；
- 你也可以自己根据 ==更多选择=={.info} 来自定义鼠标光标；
- 还有 附魔金苹果（动态）样式哦！

::: card
::mingcute:book-3-line:: **作品名称：** MC 鼠标指针  
::mingcute:contacts-2-line:: **发起者：** YOU MING 柚明 - [查看全部](#创作人员)  
::mingcute:calendar-time-add-line:: **发起时间：** *2023.2*  
::mingcute:pencil-ruler-line:: **当前状态：** ::mingcute:check-circle-line /#40c057:: ==正在更新=={.tip}  
::mingcute:time-duration-line:: **上次更新时间：** *2025.2.06* - [查看更新历史](#更新历史)  
::mingcute:board-line:: **当前版本：** ==正式版 - v1.8==（内测版 - v1.9）

---

::mingcute:layout-3-line:: **项目分类：** `YM-作品项目`  
::mingcute:quill-pen-line:: **项目类型：** ::mingcute:quill-pen-line /#40c057:: 开源项目 - [查看作品权限](#作品权限)  
:::

::: card
**相关作品：** [Mine Cursor](/notes/Mine-Cursor.html)
:::

### ::mingcute:contacts-3-line:: 创作人员

发起者：

<LinkCard title="YOU MING 柚明" icon="/rc/ym-ys.png" href="/notes/更多/工作室.html#you-ming-柚明">
    一个不知名创作者
</LinkCard>

### ::mingcute:pencil-3-line:: 作品权限

::: important 要使用或修改此作品，请遵守 [《开源作品使用权限协议》](/notes/协议/开源.html) 。
:::

::: card title="作品引用或使用内容："

- [Mojang Minecraft](https://www.minecraft.net/)  
  部分游戏贴图、粒子等内容（遵循[此条款](https://www.minecraft.net/usage-guidelines)）
- [中文Minecraft Wiki](https://zh.minecraft.wiki/)  
  部分图片内容（遵循[此条款](https://zh.minecraft.wiki/w/Minecraft_Wiki:%E8%BD%AC%E8%BD%BD%E9%A1%BB%E7%9F%A5)）

:::

## ::mingcute:eye-2-line:: 预览

:::: tabs

@tab ::mingcute:pic-line:: 图片展示

<style>
  .light-theme-image { 
    display: block !important; 
  }
  .dark-theme-image { 
    display: none !important; 
  }
  html.dark .light-theme-image { 
    display: none !important; 
  }
  html.dark .dark-theme-image { 
    display: block !important; 
  }
</style>

<!-- 根据网站主题切换图片 -->
<div class="light-theme-image">
  <img src="/rc/sbzz-yl.png" width="350px">
</div>
<div class="dark-theme-image">
  <img src="/rc/sbzz-yl-dark.png" width="350px">
</div>

@tab ::mingcute:cursor-3-line:: 实时预览

<iframe src="/rc/鼠标样式预览.html" width="100%" height="790px" frameborder="0"></iframe>

@tab ::mingcute:film-line:: 视频演示&宣传片

<LinkCard title="哔哩哔哩" icon="mingcute:bilibili-fill" href="https://www.bilibili.com/video/BV11FwPejEcj/"></LinkCard>

::::

### ::mingcute:bulb-line:: 教程

::: tabs

@tab ::mingcute:film-line:: 通用安装方式

<LinkCard title="哔哩哔哩-链接" icon="mingcute:bilibili-fill" href="https://www.bilibili.com/video/BV1EJegeBERB"></LinkCard>

@[bilibili](BV1EJegeBERB)

:::

## ::mingcute:alert-line:: 已知问题

- 右键安装功能对某些用户无效。
- `文本选择` 样式的鼠标样式为强行拉直的木棍样式，有点奇怪。
- `沿角调整大小 1 2` 样式的鼠标样式为变弯的红石火把样式，面前还没有观众反馈说不好看。

---

### ::mingcute:mailbox-line:: 粉丝建议

::: demo-wrapper

<div class="pointer-container" style="display: flex; align-items: flex-start; user-select: none; position: relative;">
    <div>
        <div class="pointer-title" style="font-size: 14px; color: gray; font-weight: bold;">
            Minecraft唯艺
            <Badge type="warning" text="等待使用" />
        </div>
        <div class="pointer-comment">
            这种指针最好不要玩PVP应为看不清，UP能搞一个手柄指针吗？
        </div>
        <div class="pointer-date" style="font-size: 12px; color: gray;">
            2024-10-13 14:46
        </div>
    </div>
    <div class="overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: transparent; user-select: none; z-index: 1;"></div>
</div>
<hr>
<div class="pointer-container" style="display: flex; align-items: flex-start; user-select: none; position: relative;">
    <div>
        <div class="pointer-title" style="font-size: 14px; color: gray; font-weight: bold;">
            VIP-ID
            <Badge type="warning" text="等待使用" />
        </div>
        <div class="pointer-comment">
            能不能把钟改成动的指南针
        </div>
        <div class="pointer-date" style="font-size: 12px; color: gray;">
            2024-09-07 15:40
        </div>
    </div>
    <div class="overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: transparent; user-select: none; z-index: 1;"></div>
</div>

::: info 这是你吗？
我们会在状态为已使用后删除。  
如果你不想在这里展示，请向我们发送反馈以删除此信息。
:::

## ::mingcute:arrow-to-down-line:: 下载链接

:::: details ::mingcute:file-info-line:: 文件属性

::: card-masonry

<Card title="v1.8-鼠标光标.7z" icon="mingcute:file-zip-line"><Badge text="安全" type="tip" />
  压缩包共 291.5 KB
</Card>
<Card title="v1.3-鼠标光标.7z" icon="mingcute:file-zip-line"><Badge text="安全" type="tip" />
  压缩包共 7.5 KB
</Card>

::::

::: tabs

@tab ::mingcute:cloud-line:: 蓝奏云

- 下载链接：[https://mclanzou.lanzouo.com/b002u3f1ra](https://mclanzou.lanzouo.com/b002u3f1ra)
- 提取码：`7dfd`

[下载后必看](/必看.html){.read-more}

@tab ::mingcute:cloud-line:: 123 网盘

- 下载链接：[https://www.123pan.com/s/9ZtpTd-KnLov.html](https://www.123pan.com/s/9ZtpTd-KnLov.html)
- 提取码：`hkFc`

[下载后必看](/必看.html){.read-more}

@tab ::mingcute:cloud-line:: 夸克网盘

- 下载链接：[https://pan.quark.cn/s/35737e6a987a](https://pan.quark.cn/s/35737e6a987a)
- 提取码：`tXYn`

[下载后必看](/必看.html){.read-more}

@tab ::mingcute:cloud-line:: 百度网盘

- 下载链接：[https://pan.baidu.com/s/1c9FdVtfhWWvECdFlN_V-eg](https://pan.baidu.com/s/1c9FdVtfhWWvECdFlN_V-eg)
- 提取码：`i7o8`

[下载后必看](/必看.html){.read-more}

:::

::: important 下载即代表你已阅读并同意 [作品权限](#作品权限) 中的内容。
:::

## ::mingcute:history-anticlockwise-line:: 更新历史

[查看更新历史](/notes/更新历史/MC-鼠标指针.html)