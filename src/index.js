import './styles.css';
import addToMarkup from '../src/js/addToMarkup';
import fetchImages from '../src/js/apiService';
import { refs } from './js/refs';


const API_KEY = '19534934-9bdcedd823ab91ff8ab8054d1';

let inputValue;
let page = 1;


const getFormSubmit = (event) => {
    event.preventDefault();
    refs.galleryList.innerHTML = '';
    inputValue = event.target.elements.query.value;
    if (inputValue.length > 1) {
        fetchImages(inputValue, page, API_KEY)
            .then(images => {
                console.log(images)
                addToMarkup(images)
                refs.btnLoad.style.display = "block";
            })
            .catch(err => console.log(err))
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
        .catch(err => console.log(err))
}

refs.btnLoad.addEventListener('click', loadMoreImages)
refs.form.addEventListener('submit', getFormSubmit)
