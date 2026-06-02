// 随机灵感句子：只保存在前端数组中，不调用任何外部 API。
const inspirationIdeas = [
  "把一个复杂目标拆成三步，先完成最小的一步。",
  "今天先整理一个知识点，明天再把它变成一张卡片。",
  "好的项目不一定很大，但应该清楚、稳定、方便继续修改。",
  "试着给页面减少一个多余元素，让重点更明显。",
  "把学习过程写下来，本身就是一次复习。",
  "先做一个能运行的版本，再慢慢调整细节。",
  "为未来的自己留下清楚的文件名和注释。",
  "创意实验可以很小，只要它能带来一个新想法。"
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
