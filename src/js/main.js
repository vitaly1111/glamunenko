import { heandlerBurger } from './modules/burger';
import { smoothScroll } from './modules/smoothScroll';

const headerBurger=document.querySelector('.header__mobile')
const headerMenu=document.querySelector('.header__menu')

heandlerBurger(headerBurger,headerMenu,'header__menu-active');

smoothScroll();

//# sourceMappingURL=main.js.map
