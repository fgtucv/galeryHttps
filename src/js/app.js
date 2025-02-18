import {getImeges} from "./getImeges.js";
import {createMarkup} from "./createMarkup.js";

const mainButton = document.querySelector(".main_button");
const mainInput = document.querySelector(".main_input");
const showeMoreButton = document.querySelector(".showMore");

mainButton.addEventListener("click", addToSite);

let keyWord;
let item = 4;
let page = 1;

function addToSite(event) {
    if (event !== undefined){
        keyWord = mainInput.value;
        page = 1;
    }
    

    console.log(keyWord)

    getImeges(keyWord, item, page).then((data) => {
        createMarkup(data.hits);

        mainInput.value = "";
    });
}

showeMoreButton.addEventListener("click", showeMore);

function showeMore() {
    page += 1

    addToSite()
}