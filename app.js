function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page) => {
      if (page.id === pageId) {
        page.style.display = 'block';
      } else {
        page.style.display = 'none';
      }
    });
  }
  
  function handleNavLinkClick(event, target) {
    event.preventDefault();
  
    const pageId = target.getAttribute('data-page');
    showPage(pageId);
  
    const navItems = document.querySelectorAll('.side-nav__item');
    navItems.forEach((navItem) => {
      navItem.classList.remove('side-nav__item--active');
    });
  
    target.parentElement.classList.add('side-nav__item--active');
  }
  
  const sideNav = document.querySelector('.side-nav');
  sideNav.addEventListener('click', function (event) {
    const target = event.target.closest('.side-nav__link');
    if (target) {
      handleNavLinkClick(event, target);
    }
  });
  
  // Show the home page and set the active class for the first link by default
  showPage('home');
  const firstNavItem = document.querySelector('.side-nav__item');
  firstNavItem.classList.add('side-nav__item--active');
  