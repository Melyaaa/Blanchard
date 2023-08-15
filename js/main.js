let formBtn = document.querySelector('.form__btn')

function changeText() {
  if (window.innerWidth < 620) {
    formBtn.textContent = 'Заказать';
  } else {
    formBtn.textContent = 'Заказать обратный звонок'
  }
}

window.addEventListener("load", changeText);
window.addEventListener("resize", changeText);
