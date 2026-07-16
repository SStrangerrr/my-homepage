# 奇怪的一角

一个使用原生 HTML、CSS 和 JavaScript 制作的个人作品站，用来收纳网页项目、轻量实验和少量文字。

项目没有 npm 依赖或构建步骤，可直接部署到 GitHub Pages。

## 项目结构

```text
index.html
pages/
  projects.html
  notes.html
  lab.html
  about.html
assets/
  css/
    style.css
    responsive.css
  js/
    main.js
docs/
  development-notes.md
AGENT.md
AGENTS.md
```

公共导航和页脚由 `assets/js/main.js` 中的 Web Components 统一维护。页面内容保留在各自的 HTML 文件中，样式令牌和组件集中在 `assets/css/style.css`。

## 本地预览

在项目根目录运行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 内容与样式修改

- 首页内容：`index.html`
- 项目列表：`pages/projects.html`
- 实验内容：`pages/lab.html`
- 导航、站名和页脚：`assets/js/main.js`
- 颜色、排版与组件：`assets/css/style.css`
- 手机端适配：`assets/css/responsive.css`

修改 CSS 或 JavaScript 后，记得更新 HTML 引用中的版本查询参数，避免线上缓存旧文件。

## 隐私原则

站点不公开真实姓名、学校、专业、地址、私人联系方式或生活轨迹，也不应加入追踪脚本、API Key、访问令牌或密码。

更完整的项目约束见 `AGENT.md`。
