document.addEventListener('DOMContentLoaded', function () {

   //Показ меню
const sendv = document.querySelector('.sendvich');
const nav_ = document.querySelector('.header__nav');
sendv.onclick = function() {
   nav_.classList.toggle('header__none');
   nav_.classList.toggle('header__nav_media');
};
   //Скрытие меню при нажатии
const items = document.querySelectorAll('.header__item');
const menuBtn = document.querySelector('.menu-btn');
for (let item of items) {
   item.onclick = function() {
      nav_.classList.toggle('header__none');
      nav_.classList.toggle('header__nav_media');
      menuBtn.checked = false;
   };
}
   //Работа с карточками пиццы
      
function pizzaNew (name, nameRus, size, price) {
  this.name = name;
  this.nameRus = nameRus;
  this.size = size;
  this.price = price;
}

const salyamy = new pizzaNew ('salyamy', 'Салями', [35, 30, 25], [850, 800, 750]);
const hit = new pizzaNew('hit', 'Хит', [35, 30, 25], [850, 800, 750]);
const ham_mushrooms = new pizzaNew('ham_mushrooms', 'Ветчина-грибы', [35, 30, 25], [850, 800, 750]);
const carbonara = new pizzaNew('carbonara', 'Карбонара', [35, 30, 25], [1250, 1100, 1000]);
const firm = new pizzaNew('firm', 'Фирменная', [35, 30, 25], [950, 900, 850]);
const assorty = new pizzaNew('assorty', 'Ассорти', [35, 30, 25], [850, 800, 750]);
const L01 = new pizzaNew('L01', 'Л-01', [35, 30, 25], [920, 880, 800]);
const three_cheese = new pizzaNew('three_cheese', 'Три сыра', [35, 30, 25], [990, 900, 850]);
const meat = new pizzaNew('meat', 'Мясная', [35, 30, 25], [950, 800, 850]);
const pizzaObjects = [salyamy, hit, ham_mushrooms, carbonara, firm, assorty, L01, three_cheese, meat];
const pizzaNames = []; //массив англоимен пицц
for (let i = 0; i < pizzaObjects.length; i++) {
   pizzaNames.push(pizzaObjects[i].name);
}

//Определение активной карточки
function whatActiveCard() {
   const cards = document.querySelectorAll('.menu__cards');
   let numb; //номер карточки 
   for (let card of cards) {
      card.onmouseover = function() {
         let cardName = card.getAttribute('name_');
         numb = pizzaNames.indexOf(cardName);
   
         const labels = this.querySelectorAll('.choose__label');
   
      alert(labels.checked.innerHTML);
      }
         
   }
   return;
}

whatActiveCard();



//Показать цену пиццы в зависимости от размера

});