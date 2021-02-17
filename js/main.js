let sliderPrev = document.querySelector('.buttonPrev');
let sliderNext = document.querySelector('.buttonNext');
const slides = [...document.querySelectorAll('.slide')]
console.log(slides);

let count = 0; //номер активного слайда



function clickBtnNext() {
  slides[count].classList.remove('activeSlide');
  if (count + 1 === slides.length){
    count = 0;
  }
  else {
    count++;
  }
  slides[count].classList.add('activeSlide');
}

function clickBtnPrev() {
  slides[count].classList.remove('activeSlide');
  if (count - 1  < 0){
    count=slides.length -1    
  }
  else {
    count--;
  }
  slides[count].classList.add('activeSlide');
}

sliderNext.addEventListener('click', clickBtnNext);
sliderPrev.addEventListener('click', clickBtnPrev);