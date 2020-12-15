import { refs } from '../js/refs';
import imageCard from '../template/imageCard.hbs';


const updateMarkup = (images) => {
    let markup = imageCard(images)
    refs.galleryList.insertAdjacentHTML('beforeend', markup)
}
export default updateMarkup;



