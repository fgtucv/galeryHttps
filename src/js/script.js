import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";

const main = document.querySelector(".main");
const mainTitle = document.querySelector(".main_title");
const mainForm = document.querySelector(".main_form");
const mainInput = document.querySelector(".main_input");
const mainSpan = document.querySelector(".main_span");
const mainButton = document.querySelector(".main_button");
const mainList = document.querySelector(".main-list");

mainForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const words = mainInput.value.split(" ").join("+");

    getImeges(words).then((data) => {
        createMarkup(data.hits);

        mainInput.value = "";
    });
});

function getImeges(keyWords) {
    return fetch(`https://pixabay.com/api/?key=48523978-236760f943e457ffe618a45b5&q=${keyWords}&image_type=photo&safesearch=true&orientation=horizontal`).then((data) => {
        return data.json();
    });
};

function createMarkup(arr) {
    let html;

    mainList.innerHTML = "";
    html = "";

    if (arr.length === 0) {
        console.log(arr.length)
        iziToast.show({
            title: "Помилка",
            message: "Не знайдено зображень за вашим запитом",
            position: "topRight"
        });
    } else {
        html = arr.map((obj) => {
            return `<li class="main-lst_item">
                <a class="main-lst_big-img gallery" href="${obj.largeImageURL}"><img class="main-lst_small-img" src="${obj.webformatURL}" alt="${obj.id}"></a>
            </li>`;
        }).join("");

        mainList.innerHTML = html;
    };
};

const lightbox = new SimpleLightbox(".gallery", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250
});