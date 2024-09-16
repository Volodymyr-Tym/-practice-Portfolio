const openMobileMenu = document.querySelector('button.js-burger-menu');
const mobileMenuBackdrop = document.querySelector('div.js-mobile-menu');
const mobileMenu = document.querySelector('#mobile-menu');
const header = document.querySelector('header');
const menu = document.querySelector('div.js-nav-menu');
const Tablmenu = document.querySelector('ul.nav-menu-list');
const body = document.querySelector('body');

const widthMQ = window.matchMedia('(min-width: 768px)');

checkScreenWidth();
widthMQ.addEventListener('change', onWidthChange);
window.addEventListener('scroll', headerToFixed);

function checkScreenWidth() {
  if (window.innerWidth >= 768) {
    menu.addEventListener('click', onMenuClick);
  } else {
    openMobileMenu.addEventListener('click', onOpenMobMenuBtnClick);
  }
}

function onOpenMobMenuBtnClick() {
  mobileMenuBackdrop.classList.add('is-open');
  document.body.style.position = 'fixed';

  this.removeEventListener('click', onOpenMobMenuBtnClick);

  mobileMenu.addEventListener('click', inMobMenuClick);
}

function inMobMenuClick(event) {
  if (event.target.nodeName !== 'DIV' && event.target.nodeName !== 'UL') {
    mobileMenuBackdrop.classList.remove('is-open');
    document.body.style.position = '';

    this.removeEventListener('click', inMobMenuClick);

    openMobileMenu.addEventListener('click', onOpenMobMenuBtnClick);
  }
}

function onMenuClick() {
  Tablmenu.classList.toggle('is-visible');

  body.addEventListener('mousedown', onBodyClick);
}

function onBodyClick(event) {
  if (
    event.target.className !== 'nav-menu-link' &&
    event.target.className !== 'nav-menu-title'
  ) {
    Tablmenu.classList.remove('is-visible');
    body.removeEventListener('mousedown', onBodyClick);
  }
}

function onWidthChange(e) {
  if (!e.matches) {
    openMobileMenu.addEventListener('click', onOpenMobMenuBtnClick);

    menu.removeEventListener('click', onMenuClick);
    return;
  }

  mobileMenuBackdrop.classList.remove('is-open');
  document.body.style.position = '';

  mobileMenu.removeEventListener('click', inMobMenuClick);

  menu.addEventListener('click', onMenuClick);
}

function headerToFixed() {
  if (window.scrollY > 150) {
    header.classList.add('sd');
    // localStorage.setItem('headerState', 'fixed');
  } else {
    header.classList.remove('sd');
    // localStorage.setItem('headerState', 'default');
  }
}
