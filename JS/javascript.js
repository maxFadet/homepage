{

  // Function that greets everyone who comes here
  const welcome = () => {
    console.log("Hi everybody who has come here");
  };

  // Here we are switching the page theme and changing the button content
  const switchBackground = () => {
    const bodyStyle = document.querySelector(".body");
    const changesWord = document.querySelector(".js-changesWord");

    bodyStyle.classList.toggle("body--theme");
    changesWord.innerText = bodyStyle.classList.contains("body--theme") ? "to black" : "to light";
  };

  // This function toggles the visibility of the navigation menu when the menu button is clicked
  const toggleNavigationMenu = (navigation) => {
    navigation.style.display = navigation.style.display === "none" ? "block" : "none";
  };

  // This function adjusts the visibility of the menu button and navigation menu depending on the window size
  const adjustWindowSize = (navigation, buttonMenu) => {
    const windowWidth = window.innerWidth;
    buttonMenu.style.display = windowWidth < 747 ? "block" : "none";
    navigation.style.display = windowWidth < 747 ? "none" : "flex";
  };

  // Toggling the visibility of the navigation menu
  const toggleNavigationVisibility = (navigation) => {
    navigation.classList.toggle("navigation__list--visible");
  };

  // This function controls the visibility of the navigation menu based on the window size
  const handleResize = (navigation, buttonMenu) => {
    adjustWindowSize(navigation, buttonMenu);
    if (window.innerWidth > 747 && navigation.classList.contains("navigation__list--visible")) {
      navigation.classList.remove("navigation__list--visible");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Function initialization
  const init = () => {
    const buttonTheme = document.querySelector(".js-buttonTheme");
    const navigation = document.querySelector(".js-navigationList");
    const buttonMenu = document.querySelector(".js-buttonMenu");
    const buttonScrollTop = document.querySelector(".js-buttonScrollTop");

    buttonTheme.addEventListener("click", () => {
      switchBackground();
      toggleNavigationVisibility(navigation);
    });

    buttonMenu.addEventListener("click", () => {
      toggleNavigationMenu(navigation);
    });

    buttonScrollTop.addEventListener("click", scrollToTop);

    window.addEventListener("load", () => {
      adjustWindowSize(navigation, buttonMenu);
    });

    window.addEventListener("resize", () => {
      handleResize(navigation, buttonMenu);
    });

    welcome();
  };

  init();

};
