// 随机灵感句子：只保存在前端数组中，不调用任何外部 API。
const inspirationIdeas = [
  "先做一个很小的版本，能跑起来就已经不错。",
  "今天不用很厉害，留下一点痕迹就好。",
  "把一个想法写下来，哪怕它现在还歪歪扭扭。",
  "如果不知道从哪里开始，就先删掉一个不需要的东西。",
  "生活有时候不需要主线，支线也算剧情。",
  "给未来的自己留一个看得懂的文件名。",
  "普通日子里也可能藏着一点能用的素材。",
  "先把坑占住，等想清楚了再慢慢填。"
];

function pickRandomIdea() {
  const randomIndex = Math.floor(Math.random() * inspirationIdeas.length);
  return inspirationIdeas[randomIndex];
}

function setupInspirationCards() {
  const buttons = document.querySelectorAll("[data-inspiration-button]");

  buttons.forEach((button) => {
    const box = button.closest(".inspiration-box");
    const output = box.querySelector("[data-inspiration-output]");

    button.addEventListener("click", () => {
      output.textContent = pickRandomIdea();
    });
  });
}

setupInspirationCards();
