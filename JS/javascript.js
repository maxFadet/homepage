{
  const welcome = () => {
    console.log("Hi everybody who has come here");
  };

  const switchBackground = () => {
  const bodyStyle = document.querySelector(".body");
  const toggleCircle = document.querySelector(".js-toggleCircle");

    bodyStyle.classList.toggle("body--theme");
    bodyStyle.classList.toggle("body--light");
    bodyStyle.classList.toggle("body--borderLight");
    bodyStyle.classList.toggle("body--linkLighter")
    toggleCircle.style.backgroundColor = bodyStyle.classList.contains("body--theme")
      ? "#ffffff"
      : "#000000";
  };

  const toggleNavigationMenu = (navigation) => {
    navigation.classList.toggle("navigation__list--visible");
  };

  const adjustWindowSize = (navigation, buttonMenu) => {
  const windowWidth = window.innerWidth;
    buttonMenu.style.display = windowWidth < 747 ? "block" : "none";

    if (windowWidth >= 747) {
      navigation.classList.add("navigation__list--visible");
    } else {
      navigation.classList.remove("navigation__list--visible");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const smoothScrollToSection = (event) => {

    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const init = () => {
  const buttonTheme = document.querySelector(".js-buttonTheme");
  const navigation = document.querySelector(".js-navigationList");
  const buttonMenu = document.querySelector(".js-buttonMenu");
  const buttonScrollTop = document.querySelector(".js-buttonScrollTop");
  const menuLinks = document.querySelectorAll(".js-navigationLink");

    buttonTheme.addEventListener("click", switchBackground);
    buttonMenu.addEventListener("click", () => {
      toggleNavigationMenu(navigation);
    });

    buttonScrollTop.addEventListener("click", scrollToTop);
    menuLinks.forEach((link) => {
      link.addEventListener("click", smoothScrollToSection);
    });

    window.addEventListener("load", () => {
      adjustWindowSize(navigation, buttonMenu);
    });

    window.addEventListener("resize", () => {
      adjustWindowSize(navigation, buttonMenu);
    });

    welcome();
  };
  init();
}