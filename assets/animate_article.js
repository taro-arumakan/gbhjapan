const transitionsMap = {
  0: 'reveal_tran_bt',
  1: 'reveal_tran_lr',
  2: 'reveal_tran_rl',
  3: 'reveal_tran_tb'
};
const keys = Object.keys(transitionsMap).length;
document.querySelectorAll('h1, h2, h3, .h6, .prose div, .prose p').forEach((element, index) => {
  const tran = transitionsMap[index % keys];
  element.classList.add(tran);
});
