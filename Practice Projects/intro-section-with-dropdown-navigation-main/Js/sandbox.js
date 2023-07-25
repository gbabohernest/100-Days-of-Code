const hamburger = document.querySelector('#hamburger');
const mobileNav = document.querySelector('#mobile-nav');

//  * DESKTOP SUB MENU ELEMENTS
const desktopSubMenu = document.querySelectorAll('.desktop-sub-menu span');
const desktopSub1 = document.querySelector('#desktop-sub-1');
const desktopSub2 = document.querySelector('#desktop-sub-2');

// * MOBILE SUB MENU ELEMENTS
const mobileSubMenu = document.querySelectorAll('.mobile-sub-menu span');
const subMenu1 = document.querySelector('#sub-menu-1');
const subMenu2 = document.querySelector('#sub-menu-2');
const listItem1 = document.querySelector('li.features');
const listItem2 = document.querySelector('li.company');

// ! TOGGLE DESKTOP SUB MENU
desktopSubMenu.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    let img = menuItem.querySelectorAll('img');

    if (menuItem.classList.contains('d-features')) {
      img.forEach((img) => {
        if (!img.classList.contains('close-btn')) {
          img.classList.add('close-btn');
          desktopSub1.classList.toggle('display-none');
        } else {
          img.classList.remove('close-btn');
        }
      });
    }

    if (menuItem.classList.contains('d-company')) {
      img.forEach((img) => {
        if (!img.classList.contains('close-btn')) {
          img.classList.add('close-btn');
          desktopSub2.classList.toggle('display-none');
        } else {
          img.classList.remove('close-btn');
        }
      });
    }
  });
});

// ! TOGGLE MOBILE SUB MENU
mobileSubMenu.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    let img = menuItem.querySelectorAll('img');

    if (menuItem.classList.contains('features')) {
      img.forEach((img) => {
        if (!img.classList.contains('close-btn')) {
          img.classList.add('close-btn');

          if (!subMenu2.classList.contains('display-none')) {
            subMenu2.classList.toggle('top-158');
          }
          subMenu1.classList.toggle('display-none');
          listItem1.classList.toggle('mb');
        } else {
          img.classList.remove('close-btn');
          if (!subMenu2.classList.contains('display-none')) {
            subMenu2.classList.toggle('top-300');
          }
        }
      });
    }

    if (menuItem.classList.contains('company')) {
      img.forEach((img) => {
        if (!img.classList.contains('close-btn')) {
          img.classList.add('close-btn');

          if (subMenu1.classList.contains('display-none')) {
            subMenu2.classList.toggle('top-158');
          } else if (!subMenu1.classList.contains('display-none')) {
            //? adjust the position of the drop down list items
            subMenu2.classList.toggle('top-300');
          }
          subMenu2.classList.toggle('display-none');
          listItem2.classList.toggle('mb2');
        } else {
          img.classList.remove('close-btn');
        }
      });
    }
  });
});

// ! TOGGLE HAMBURGER MENU
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
