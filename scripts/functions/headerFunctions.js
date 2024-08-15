// functions for interactive elements of the header component

const toggleHamburger = (className) => {
  const navElement = document.getElementById('header-navbar');
  navElement.className = className;
}

const onHamburgerOpen = () => {
  toggleHamburger('show-nav');
}

const onHamburgerClose = () => {
  toggleHamburger('hide-nav');
}

export {onHamburgerOpen, onHamburgerClose};