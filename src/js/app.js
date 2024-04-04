/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

// support webp, identify device
import BaseHelpers from './helpers/BaseHelpers.js';
import inlineSVG from 'inline-svg';
import LazyLoad from 'vanilla-lazyload';
import CardTab from './modules/CardTab.js';
import WordAnimation from './modules/WordAnimation.js';
import WorkTab from './modules/WorkTab.js';
import HeaderBtnToggle from './modules/HeaderBtnToggle.js';
import SliderInit from './modules/SliderInit.js';

BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

document.addEventListener('DOMContentLoaded', function() {
  // inline svg convert
  inlineSVG.init({
    svgSelector: 'img.js-convert-svg'
  });

  // word animation hero section
  const wordAnimation = new WordAnimation('.js-word-animation span');
  wordAnimation.animateWords();

  // lazy load
  const lazyLoadInstance = new LazyLoad({
    elements_selector: '.js-lazyload'
  });

  // slider service init
  SliderInit();

  // tab init
  new CardTab();
  new WorkTab();
});