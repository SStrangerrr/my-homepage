const SITE_NAME = "奇怪的一角";

const navigationItems = [
  { id: "home", label: "首页", path: "index.html" },
  { id: "projects", label: "作品", path: "pages/projects.html" },
  { id: "notes", label: "文字", path: "pages/notes.html" },
  { id: "lab", label: "实验", path: "pages/lab.html" },
  { id: "about", label: "关于", path: "pages/about.html" }
];

class SiteHeader extends HTMLElement {
  connectedCallback() {
    const root = this.getAttribute("root") || "";
    const active = this.getAttribute("active") || "home";
    const links = navigationItems.map((item) => {
      const current = item.id === active ? ' aria-current="page"' : "";
      return `<a href="${root}${item.path}"${current}>${item.label}</a>`;
    }).join("");

    this.innerHTML = `
      <header class="site-header">
        <nav class="navbar shell" aria-label="主导航">
          <a class="brand" href="${root}index.html">${SITE_NAME}</a>
          <div class="nav-links">${links}</div>
        </nav>
      </header>
    `;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="footer-inner shell">
          <p>© 2026 ${SITE_NAME}</p>
          <p>只留下作品与想法，不留下不必要的个人信息。</p>
        </div>
      </footer>
    `;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);

const inspirationIdeas = [
  "先做一个很小的版本，能打开，就已经开始了。",
  "删掉一个不需要的东西，答案可能就清楚一点。",
  "把想法写短一些，再把真正重要的部分做出来。",
  "不必解释所有过程，作品可以自己说话。",
  "主线太吵的时候，做一条安静的支线。",
  "先让它真实可用，再让它恰到好看。",
  "留一点空白，给下一次判断。",
  "慢一点没关系，保持作品仍在生长。"
];

function setupInspirationCards() {
  document.querySelectorAll("[data-inspiration-button]").forEach((button) => {
    const box = button.closest(".inspiration-box");
    const output = box?.querySelector("[data-inspiration-output]");

    if (!output) return;

    button.addEventListener("click", () => {
      const current = output.textContent;
      const choices = inspirationIdeas.filter((idea) => idea !== current);
      output.textContent = choices[Math.floor(Math.random() * choices.length)];
    });
  });
}

setupInspirationCards();
