import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

Swiper.use([Navigation]);

function SliderInit() {
  const sliderElement = document.querySelector('.js-services-slider-init');
  
  if (!sliderElement) {
    return;
  }
  
  const swiper = new Swiper(sliderElement, {
    slidesPerView: 'auto',
    loop: true,
    slideToClickedSlide: true,
    centeredSlides: true,
    speed: 800,
    
    navigation: {
      prevEl: '.js-services-slider-btn-prev',
      nextEl: '.js-services-slider-btn-next',
    },
  });

  return swiper;
}

export default SliderInit;