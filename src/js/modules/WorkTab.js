class WorkTab {
  constructor() {
    this.cardLinks = document.querySelectorAll('.js-work-tab-nav');
    this.cards = document.querySelectorAll('.js-work-tab-content');
    this.initialize();
  }

  initialize() {
    this.cardLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetCardId = link.getAttribute('href').substring(1);
        
        this.cardLinks.forEach((item) => {
          item.classList.remove('is-active');
        });
        link.classList.add('is-active');
        
        this.cards.forEach((card) => {
          card.classList.remove('is-show');
        });
        const targetCard = document.getElementById(targetCardId);
        if (targetCard) {
          targetCard.classList.add('is-show');
        }
      });
    });
  }
}

export default WorkTab;