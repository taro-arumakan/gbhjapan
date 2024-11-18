['h1', 'h2', 'h3'].forEach(tag => {
  document.querySelectorAll(tag).forEach(element => {
    element.classList.add('reveal_tran_bt');
  });
});

const transitionsMap = {
  0: 'reveal_tran_bt',
  1: 'reveal_tran_lr',
  2: 'reveal_tran_rl',
  3: 'reveal_tran_tb'
};
const keys = Object.keys(transitionsMap).length;
document.querySelectorAll('.prose div').forEach((element, index) => {
  const tran = transitionsMap[index % keys];
  element.classList.add(tran);
});
