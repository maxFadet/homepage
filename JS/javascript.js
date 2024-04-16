{

  // Function that greets everyone who comes here

  const welcome = () => {
    console.log("Hi everybody who has come here")
  }

  // Here we are switching the page theme and changing the button content

  const switchBackground = () => {
    const bodyStyle = document.querySelector(".body");
    const changesWord = document.querySelector(".js-changesWord");
    bodyStyle.classList.toggle("body--theme");
    changesWord.innerText = bodyStyle.classList.contains("body--theme") ? "to black" : "to light"
  };

  // This function initializes the theme button and adds a click handler to it

  const init = () => {
    const buttonTheme = document.querySelector(".js-buttonTheme");
    buttonTheme.addEventListener("click", switchBackground);
    welcome();
  };

  init();

  // This function toggles the visibility of the navigation menu when the menu button is clicked

  const toggleNavigationMenu = () => {
    const navigation = document.querySelector(".js-navigationList");

    navigation.style.display = navigation.style.display === "none" ? "block" : "none";
  };

  const initializeMenuButton = () => {
    const buttonMenu = document.querySelector(".js-buttonMenu");
    buttonMenu.addEventListener("click", toggleNavigationMenu);
  };

  initializeMenuButton();

  // This function adjusts the visibility of the menu button and navigation menu depending on the window size

  const adjustWindowSize = () => {
    const navigation = document.querySelector(".js-navigationList");
    const buttonMenu = document.querySelector(".js-buttonMenu");

    const windowWidth = window.innerWidth;
    buttonMenu.style.display = windowWidth < 747 ? "block" : "none";
    navigation.style.display = windowWidth < 747 ? "none" : "flex";
  };
  adjustWindowSize();

  window.addEventListener("load", adjustWindowSize);
  window.addEventListener("resize", adjustWindowSize);

  // Toggling the visibility of the navigation menu

  const toggleNavigationVisibility = () => {
    const navigation = document.querySelector(".js-navigationList");
    navigation.classList.toggle("navigation__list--visible");
  };

  // This function controls the visibility of the navigation menu based on the window size

  const handleResize = () => {
    const navigation = document.querySelector(".js-navigationList");

    if (window.innerWidth > 747 && navigation.classList.contains("navigation__list--visible")) {
      navigation.classList.remove("navigation__list--visible");
    }
  };

  // This function adds event handlers for the menu button and window resize events

  const initializeMenu = () => {
    const buttonMenu = document.querySelector(".js-buttonMenu");
    buttonMenu.addEventListener("click", toggleNavigationVisibility);
    window.addEventListener("resize", handleResize);
  };

  initializeMenu();

};