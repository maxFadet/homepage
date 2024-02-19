// // переключение стиля заголовка

// let mainTitle = document.querySelector(".mainTitle");
// let mainTitleLarge = document.querySelector(".mainTitleLarge");

// mainTitle.addEventListener("click", () => {
//     mainTitle.classList.toggle("mainTitleLarge");
// })

// тема сайта

let buttonTheme = document.querySelector(".js-buttonTheme");;
let changesWord = document.querySelector(".js-changesWord");
let bodyStyle = document.querySelector(".bodyStyle");

buttonTheme.addEventListener("click", () => {
    bodyStyle.classList.toggle("bodyStyle--dark");
    if(bodyStyle.classList.contains("bodyStyle--dark")) {
        changesWord.innerText = "темную"
    } else {
        changesWord.innerText = "светлую"
    }
})

const buttonMenu = document.querySelector(".js-buttonMenu");
const navigation = document.querySelector(".js-navigationList");

// Добавляем обработчик события клика на кнопку меню
buttonMenu.addEventListener("click", () => {
  // Если навигационное меню скрыто, открываем его и меняем текст на кнопке
  if (navigation.style.display === "none") {
    navigation.style.display = "block";
    // buttonMenu.textContent = "close";
  } else {
    // Если навигационное меню открыто, скрываем его и меняем текст на кнопке
    navigation.style.display = "none";
    // buttonMenu.textContent = "menu";
  }
});

// Функция, которая будет вызываться при изменении размеров окна
function checkWindowSize() {
  // Получаем ширину окна
  const windowWidth = window.innerWidth;

  // Если ширина окна меньше 768 пикселей, то показываем кнопку меню и скрываем навигационное меню
  if (windowWidth < 747) {
    buttonMenu.style.display = "block";
    navigation.style.display = "none";
    // buttonMenu.textContent = "menu";
  } else {
    // Если ширина окна больше или равна 768 пикселей, то скрываем кнопку меню и показываем навигационное меню
    buttonMenu.style.display = "none";
    navigation.style.display = "flex";
  }
}

// Вызываем функцию checkWindowSize при загрузке страницы и при изменении размеров окна
window.addEventListener("load", checkWindowSize);
window.addEventListener("resize", checkWindowSize);


buttonMenu.addEventListener("click", () => {
  navigation.classList.toggle("navigation__list--visible");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 747 && navigation.classList.contains("navigation__list--visible")) {
    navigation.classList.remove("navigation__list--visible");
  }
});
