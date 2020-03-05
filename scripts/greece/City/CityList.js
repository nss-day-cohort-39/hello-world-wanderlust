import { getGreekCities } from "./CityDataProvider.js";
import greekCity from "./City.js";


//gets a copy of the cities and renders them on DOM
const greekCityList = () => {
    //get the HTML element to put the cities into
    const citiesElement = document.querySelector('.city__list');

    //get the city array of objects
    const cities = getGreekCities();

    //loop through the city objects and display them on the DOM
    for (const city of cities) {
        citiesElement.innerHTML += greekCity(city);
    }
}

export default greekCityList;