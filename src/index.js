import './styles.css';
import addToMarkup from '../src/js/addToMarkup';
import fetchImages from '../src/js/apiService';
import { refs } from './js/refs';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import "@pnotify/core/dist/PNotify.css";


const API_KEY = '19534934-9bdcedd823ab91ff8ab8054d1';

let inputValue;
let page = 1;


const getFormSubmit = (event) => {
    event.preventDefault();
    refs.galleryList.innerHTML = '';
    inputValue = event.target.elements.query.value;
    if (inputValue.length > 1) {
        refs.btnLoad.classList.remove('hiden')
        fetchImages(inputValue, page, API_KEY)
            .then(images => {
                console.log(images)
                addToMarkup(images)
                refs.btnLoad.style.display = "block";
            })
            .catch(error => console.log(error))
    } else if (inputValue.length === 0) {
        error({ text: 'Write what you want to find before submit' })
        refs.btnLoad.classList.add('hiden')
    }

}
const loadMoreImages = () => {
    page += 1;
    fetchImages(inputValue, page, API_KEY)
        .then(images => {
            console.log(images)
            addToMarkup(images)
            // window.scrollByPages(1)
            window.scrollTo({
                top: document.documentElement.offsetHeight,
                behavior: 'smooth',
            });
        })
        .catch(error => console.log(error))
}

refs.btnLoad.addEventListener('click', loadMoreImages)
refs.form.addEventListener('submit', getFormSubmit)
