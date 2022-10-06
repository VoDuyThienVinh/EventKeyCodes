const keyEl = document.querySelectorAll('.key');

console.log(keyEl);

window.addEventListener('keydown', (e) => {
  keyEl[0].innerText = e.key;
  keyEl[1].innerText = e.keyCode;
  keyEl[2].innerText = e.code; 
})