# 开发笔记

## HTML、CSS、JavaScript 分别负责什么

HTML 负责网页内容和结构，例如标题、段落、导航、卡片和按钮。

CSS 负责网页外观，例如颜色、间距、字体大小、卡片样式、按钮样式和手机端布局。

JavaScript 负责网页交互，例如本项目里的“随机灵感卡片”按钮点击功能。

## 为什么要把页面、样式、脚本分开

把 HTML、CSS、JavaScript 分开，可以让项目更清楚，也更方便维护。

如果要改文字，主要看 HTML 文件；如果要改颜色和布局，主要看 CSS 文件；如果要改交互功能，主要看 JavaScript 文件。这样后续新增页面时，也能复用同一套样式和脚本。

## 当前项目如何扩展

写下来的页面可以在 `pages/notes.html` 中继续新增内容卡片。每张卡片可以使用现有的 `content-card` 结构。

正在生长页面可以在 `pages/projects.html` 中继续新增项目、想法或占坑卡片。每张卡片可以使用现有的 `project-card` 结构。

实验室可以在 `pages/lab.html` 中继续新增创意小网页入口。如果实验需要按钮、输入框或结果展示，可以把样式写在 `assets/css/style.css`，把交互写在 `assets/js/main.js`。

## 为什么不能把 API Key 写在前端

如果未来接入 AI API，不能把 API Key 直接写在 HTML、CSS 或 JavaScript 里。前端代码会被浏览器下载，任何访问网站的人都可能看到里面的密钥。

更安全的做法是使用后端服务、Serverless Function 或其他安全代理方式，让密钥只保存在服务器环境变量中。

## 后续可以考虑的框架

如果项目以后变复杂，可以考虑 React、Vue、Astro、Vite 或其他工具来管理组件、路由和构建流程。

不过当前项目页面数量少、功能轻量，使用原生 HTML、CSS、JavaScript 更容易理解，也更适合直接部署到 GitHub Pages。
