const showFaqTabs = (tabButton) => {
  const tabs = tabButton.closest('.faq__tabs');
  if (tabButton.classList.contains('button-tabs--active')) {
    return;
  }

  const targetId = tabButton.dataset.targetId;
  const tabList = tabs.querySelector(`.faq__info-list[data-id="${targetId}"]`);

  if (tabList) {
    const tabButtonActive = tabs.querySelector('.button-tabs--active');
    tabButtonActive.classList.remove('button-tabs--active');
    const tabShow = tabs.querySelector('.faq__info-list--show');
    tabShow.classList.remove('faq__info-list--show');
    tabButton.classList.add('button-tabs--active');
    tabList.classList.add('faq__info-list--show');
  }
};

document.addEventListener('click', (evt) => {
  if (evt.target && !evt.target.closest('.faq__button')) {
    return;
  }
  const tabButton = evt.target.closest('.faq__button');
  showFaqTabs(tabButton);
});
