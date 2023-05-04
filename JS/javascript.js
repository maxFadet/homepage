// переключение стиля заголовка

let mainTitle = document.querySelector(".mainTitle");
let mainTitleLarge = document.querySelector(".mainTitleLarge");

mainTitle.addEventListener("click", () => {
    mainTitle.classList.toggle("mainTitleLarge");
})

// тема сайта

let buttonTheme = document.querySelector(".navigation__buttonTheme");;
let nameButton = document.querySelector(".navigation__nameButton");
let bodyStyle = document.querySelector(".bodyStyle");

buttonTheme.addEventListener("click", () => {
    bodyStyle.classList.toggle("bodyStyle--dark");
    if(bodyStyle.classList.contains("bodyStyle--dark")) {
        nameButton.innerText = "темную"
    } else {
        nameButton.innerText = "светлую"
    }
})

// перелистывание фоток

