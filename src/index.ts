// Импортируем стили
import "./styles/main.scss";

// Простая инициализация для начала
console.log("Historical Timeline project started!");

// Временный код для Swiper
declare const Swiper: any;

const swiper = new Swiper(".timeline-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
