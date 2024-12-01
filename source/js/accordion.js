const questionItems = document.querySelectorAll('.faq__info-item');

const accordionHandler = () => {
  questionItems.forEach((item) => {
    const button = item.querySelector('.faq__info-button');

    button.addEventListener('click', () => {
      item.classList.toggle('faq__info-item--active');
    });
  });
};

export {accordionHandler};
