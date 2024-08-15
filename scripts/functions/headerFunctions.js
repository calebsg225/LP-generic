// functions for interactive elements of the header component

const onHamburgerToggle = (e) => {
  const navElement = document.getElementById('header-navbar');
  navElement.className = (
    navElement.classList.contains('hide-nav')
    ? 'show-nav'
    : 'hide-nav'
  );
}

export {onHamburgerToggle};