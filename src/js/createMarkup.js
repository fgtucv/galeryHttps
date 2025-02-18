import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";

const mainList = document.querySelector(".main-list");

export function createMarkup(arr) {
if (arr.length === 0) {
        console.log(arr.length)
        iziToast.show({
            title: "Помилка",
            message: "Не знайдено зображень за вашим запитом",
            position: "topRight"
        });
    } else {
        const html = arr.map((obj) => {
            return `<li class="main-lst_item">
                <a class="main-lst_big-img gallery" href="${obj.largeImageURL}"><img class="main-lst_small-img" src="${obj.webformatURL}" alt="${obj.id}"></a>
            </li>`;
        }).join("");

        mainList.insertAdjacentHTML("beforeend", html)
    };
};

const lightbox = new SimpleLightbox(".gallery", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250
});