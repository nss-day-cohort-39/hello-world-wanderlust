import { getCities } from './CityDataProvider.js';
import cityRepresentation from './CityRepresentation.js';

//gets a copy of the cities and renders them on DOM
const cityList = () => {
    //get the HTML element to put the cities into
    const citiesElement = document.querySelector('.city__list');

    //get the city array of objects
    const cities = getCities();

    //loop through the city objects and display them on the DOM
    for (const city of cities) {
        citiesElement.innerHTML += cityRepresentation(city);
    }
}

export default cityList;