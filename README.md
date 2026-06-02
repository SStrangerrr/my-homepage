# Creative Lab

这是一个使用原生 HTML、CSS、JavaScript 制作的个人网站首页项目，用于记录公开学习笔记、项目作品、网页练习和创意实验。

项目不依赖 React、Vue、Next.js、Astro、Vite 或 npm，适合直接部署到 GitHub Pages。

## 项目结构

```text
index.html
pages/
  notes.html
  projects.html
  lab.html
  about.html
assets/
  css/
    style.css
    responsive.css
  js/
    main.js
  images/
    .gitkeep
docs/
  development-notes.md
README.md
.gitignore
```

`index.html` 是首页。

`pages/` 存放子页面，包括文章、作品、AI实验室和关于页面。

`assets/css/` 存放样式文件。

`assets/js/` 存放 JavaScript 交互脚本。

`assets/images/` 预留给以后放图片。

`docs/` 存放开发说明和学习笔记。

## 如何本地预览

最简单的方法是直接双击打开 `index.html`。

也可以在项目根目录运行一个本地静态服务器：

```bash
python3 -m http.server 8000
```

然后在浏览器访问：

```text
http://localhost:8000
```

## 如何修改首页文字

首页文字在 `index.html` 中修改。

例如主标题、副标题、按钮文字、卡片内容、关于介绍和页脚文字，都可以直接在 `index.html` 里找到对应内容。

## 如何新增文章和项目卡片

新增文章卡片时，打开 `pages/notes.html`，复制一个 `content-card` 区块，再修改标题和简介。

新增项目卡片时，打开 `pages/projects.html`，复制一个 `project-card` 区块，再修改项目标题、简介和标签。

首页精选项目在 `index.html` 的“精选项目”区域中修改。

## 如何修改颜色和样式

主要样式在 `assets/css/style.css`。

颜色集中写在文件开头的 `:root` 变量中，例如：

```css
--bg: #f7f8fa;
--text: #111318;
--accent: #1b4dff;
```

手机端布局写在 `assets/css/responsive.css`。

如果要修改卡片、按钮、导航栏或页面间距，可以优先查看这两个 CSS 文件。

## 如何部署到 GitHub Pages

1. 把项目提交到 GitHub 仓库。
2. 打开 GitHub 仓库页面。
3. 进入 Settings。
4. 找到 Pages。
5. Source 选择 Deploy from a branch。
6. Branch 选择 `main` 或你的默认分支。
7. 文件夹选择 `/root`。
8. 保存后等待 GitHub Pages 生成访问链接。

因为本项目使用的是静态 HTML、CSS、JavaScript，所以不需要构建命令。

## 隐私提醒

不要上传真实隐私信息，例如真实姓名、学号、手机号、私人邮箱、学校班级、家庭地址等。

不要上传 API Key、访问令牌、密码或 `.env` 文件。
