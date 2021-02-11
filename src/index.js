import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basiclightbox.min.css';
import './styles.css';

const modalTemplate = document.querySelector('#modal');
const instance = basicLightbox.create(modalTemplate);

instance.show();
