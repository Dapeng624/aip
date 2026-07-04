# CLAUDE.md

本文件用于指导 AI coding assistant 在本仓库中协作开发。

## 项目概述

- 项目名称：`raphael-clone`
- 项目类型：AI 图片生成工具落地页 / MicroSaaS 练习项目
- 模仿对象：`https://raphael.app`
- 当前阶段：Next.js 14 + Tailwind CSS 静态交互原型
- 核心目标：复刻核心页面结构与交互体验，后续再接入真实 AI 图片生成 API

## 技术栈

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui 风格的本地基础组件
- Lucide React 图标
- Lorem Picsum 占位图片
- npm 包管理

## 目录结构

- `src/app/layout.tsx`：根布局与 metadata
- `src/app/page.tsx`：首页模块组合
- `src/app/globals.css`：全局样式、背景与动画
- `src/components/`：页面模块组件
- `src/components/ui/`：基础 UI 组件
- `src/data/gallery.ts`：画廊占位数据
- `public/`：静态公开资源

## 本地运行

```bash
npm install
npm run dev
```

默认地址：

```text
http://localhost:3000
```

## 开发约定

- 保持界面文案为英文。
- 与开发者沟通可使用中文。
- 优先维护 SPEC 中的 6 个核心模块：Navigation、Hero、Prompt Input、Gallery、Features、Footer。
- 不要直接复制第三方品牌素材、受保护图片或完整商业文案。
- 当前阶段不要引入认证、支付、数据库、邮件、云存储等后端能力，除非任务明确要求。
- 新组件应保持职责清晰，优先复用 `src/components/ui/` 中的基础组件。
- 视觉修改必须同时考虑桌面、平板、手机布局。

## 验证命令

修改后至少运行：

```bash
npm run lint
npm run typecheck
npm run build
```

交互验证：

- Prompt 可输入。
- Generate 按钮有 loading 状态并恢复。
- 示例 prompt 标签可填入内容。
- Gallery 图片 hover 有反馈。
- 点击 Gallery 图片可打开 lightbox。
- Lightbox 可关闭，并显示下载按钮。
- 390px 手机宽度无横向滚动。
