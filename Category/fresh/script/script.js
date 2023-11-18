const iconOpen = document.getElementById('iconOpen')
const iconOpenShop = document.getElementById('iconOpenShop')
const iconClose = document.getElementById('iconClose')
const menuIcons = document.getElementById('menuIcons')
const meinMenu = document.getElementById('meinMenu')

menuIcons.addEventListener('click', ()=> {
    iconOpenShop.classList.toggle('hide')
    iconOpen.classList.toggle('hide')
    iconClose.classList.toggle('hide')
    meinMenu.classList.toggle('hide')
})

//ЗАКРІПКА МЕНЮ

const menu = document.getElementById("window");
const offset = menu.offsetTop;
let lastScrollTop = 0; // Змінна для зберігання попереднього значення scrollTop
function fixMenu() {
const currentScrollTop = window.pageYOffset;
// Перевіряємо, чи перевищує поточний scrollTop відступ меню
if (currentScrollTop >= offset) {
menu.classList.add("fixed-menu");
document.body.style.paddingTop = menu.offsetHeight + "px";
// Змінюємо колір меню
menu.style.backgroundColor = "#e2e4e8";
} else {
menu.classList.remove("fixed-menu");
document.body.style.paddingTop = 0;
// Повертаємо оригінальний колір меню
menu.style.backgroundColor = ""; // Оце очищає стиль
}
// Перевірка напрямку скролу
if (currentScrollTop < lastScrollTop) {
// Якщо скролл вгору, то знову знімаємо клас "fixed-menu" та відступ для body
menu.classList.remove("fixed-menu");
document.body.style.paddingTop = 0;
// Повертаємо оригінальний колір меню
menu.style.backgroundColor = ""; // Оце очищає стиль
}
lastScrollTop = currentScrollTop; // Зберігаємо поточне значення scrollTop
}
// Додаємо обробник події scroll для виклику функції fixMenu при скролі
window.addEventListener("scroll", fixMenu);

// Обробник події DOMContentLoaded, який може виконатися після завантаження DOM
document.addEventListener("DOMContentLoaded", () => {
const menuHeight = menu.offsetHeight; // Отримуємо висоту меню
});