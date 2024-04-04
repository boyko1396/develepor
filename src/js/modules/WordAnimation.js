export default class WordAnimation {
  constructor(selector) {
    this.wordAnimations = document.querySelectorAll(selector);
    this.delay = 2;
  }

  animateWords() {
    this.wordAnimations.forEach((element) => {
      element.style.transitionDelay = this.delay + 's';
      this.delay += .08;
    });
  }
}