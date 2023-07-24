const hamburger = document.querySelector('#hamburger');
const mobileNav = document.querySelector('#mobile-nav');

const desktopSubMenu = document.querySelector('.desktop-sub-menu');

const mobileSubMenu = document.querySelectorAll('.mobile-sub-menu span');

const subMenu1 = document.querySelector('#sub-menu-1');
const subMenu2 = document.querySelector('#sub-menu-2');
const listItem1 = document.querySelector('li.features');
const listItem2 = document.querySelector('li.company');

mobileSubMenu.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    let img = menuItem.querySelectorAll('img');
    img.forEach((img) => {
      // *TOGGLE OPEN SUB-MENU
      if (
        !img.classList.contains('close-btn') &&
        menuItem.classList.contains('features')
      ) {
        img.classList.toggle('close-btn');
        subMenu1.classList.toggle('display-none');
        listItem1.classList.toggle('mb');
      } else {
        // *TOGGLE CLOSE SUB-MENU
        img.classList.toggle('close-btn');
      }

      // *TOGGLE OPEN SUB-MENU
      if (
        !img.classList.contains('close-btn') &&
        menuItem.classList.contains('company')
      ) {
        img.classList.toggle('close-btn');
        subMenu2.classList.toggle('display-none');
        listItem2.classList.toggle('mb2');
      } else {
        // *TOGGLE CLOSE SUB-MENU
        img.classList.toggle('close-btn');
      }
    });
  });
});

const toggleHamburgerMenu = () => {
  const buttons = hamburger.querySelectorAll('img');

  if (mobileNav.classList.contains('close')) {
    buttons.forEach((btn) => {
      //* OPEN MOBILE NAV
      if (!btn.classList.contains('close-btn')) {
        btn.classList.add('close-btn');
      } else {
        btn.classList.remove('close-btn');
      }
    });
    mobileNav.classList.remove('close');
  } else {
    buttons.forEach((btn) => {
      //* CLOSE MOBILE NAV
      if (btn.classList.contains('close-btn')) {
        btn.classList.toggle('close-btn');
      } else {
        btn.classList.add('close-btn');
      }
    });
    mobileNav.classList.add('close');
  }
};

hamburger.addEventListener('click', toggleHamburgerMenu);
