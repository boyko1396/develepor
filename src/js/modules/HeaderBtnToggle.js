class HeaderBtnToggle {
  constructor(burgerButton) {
    this.burgerButton = burgerButton;
    this.body = document.body;

    this.burgerButton.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu() {
    this.body.classList.toggle('is-menu-opened');
  }
}

const burgerButtons = document.querySelectorAll('.js-header-nav-toggle');

burgerButtons.forEach(button => {
  new HeaderBtnToggle(button);
});

export default HeaderBtnToggle;