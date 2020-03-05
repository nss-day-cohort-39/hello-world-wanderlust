import { getGreeceLandmarks } from "./LandmarkDataProvider.js";
import greekLandmark from "./GreeceLandmark.js";

//gets a copy of the landmarks and renders them on DOM
const greekLandmarkList = () => {
    //get the HTML element to put the landmarks into
    const landmarkElement = document.querySelector('.landmarks section'); //insert the landmarks into the empty section contained in the section with the "landmarks" class

    //get the landmark array of objects
    const landmarks = getGreeceLandmarks();

    //loop through the landmark objects and display them on the DOM
    for (const landmark of landmarks) {
        landmarkElement.innerHTML += greekLandmark(landmark);
    }
}

export default greekLandmarkList