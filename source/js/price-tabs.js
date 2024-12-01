const showPriceTabs = (tabButton) => {
  const tabs = tabButton.closest('.price__tabs');
  if (tabButton.classList.contains('price__button--active')) {
    return;
  }

  const targetId = tabButton.dataset.targetId;
  const tabList = tabs.querySelector(`.price__options[data-id="${targetId}"]`);

  if (tabList) {
    const tabButtonActive = tabs.querySelector('.price__button--active');
    tabButtonActive.classList.remove('price__button--active');
    const tabShow = tabs.querySelector('.price__options--show');
    tabShow.classList.remove('price__options--show');
    tabButton.classList.add('price__button--active');
    tabList.classList.add('price__options--show');
  }
};

document.addEventListener('click', (evt) => {
  if (evt.target && !evt.target.closest('.price__button')) {
    return;
  }
  const tabButton = evt.target.closest('.price__button');
  showPriceTabs(tabButton);
});
