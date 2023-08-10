function burgerMenuToggle() {
  const header = document.querySelector('.header');
  const headerNavigation = document.querySelector('.header__navigation');
  const burger = document.querySelector('.burger');
  const burgerIconOpen = document.querySelector('.burger__icon--open');
  const burgerIconClose = document.querySelector('.burger__icon--close');
  const navigationItems = document.querySelectorAll('.navigation__item');

  burger.classList.remove('burger--nojs');
  headerNavigation.classList.remove('header__navigation--nojs');

  window.addEventListener('resize', function () {
    if (window.innerWidth <= 1199) {
      navigationItems.forEach((item)=> item.addEventListener('click', function () {
        header.classList.remove('header--tablet');
        headerNavigation.classList.remove('header__navigation--opened');
        burgerIconClose.classList.remove('burger__icon--visible');
        burgerIconOpen.classList.add('burger__icon--visible');
      }));
      burgerIconOpen.addEventListener('click', function (evt) {
        evt.preventDefault();
        burgerIconOpen.classList.toggle('burger__icon--visible');
        burgerIconClose.classList.toggle('burger__icon--visible');
        header.classList.add('header--tablet');
        headerNavigation.classList.add('header__navigation--opened');
      });
      burgerIconClose.addEventListener('click', function (evt) {
        evt.preventDefault();
        burgerIconOpen.classList.toggle('burger__icon--visible');
        burgerIconClose.classList.toggle('burger__icon--visible');
        header.classList.remove('header--tablet');
        headerNavigation.classList.remove('header__navigation--opened');
      });
    } else if (header.classList.contains('header--tablet')) {
      header.classList.remove('header--tablet');
      headerNavigation.classList.remove('header__navigation--opened');
      burgerIconOpen.classList.add('burger__icon--visible');
      burgerIconClose.classList.remove('burger__icon--visible');
    }
  });
}

export {burgerMenuToggle};
