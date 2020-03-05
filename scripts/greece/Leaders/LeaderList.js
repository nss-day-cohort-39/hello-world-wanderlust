import { getLeaders } from './LeaderDataProvider.js';
import leaderRepresentation from './Leader.js';

//gets a copy of the leaders and renders them on DOM
const leaderList = () => {
    //get the HTML element to put the leaders into
    const leadersElement = document.querySelector('.govt__list');

    //get the leader array of objects
    const leaders = getLeaders();

    //loop through the leader objects and display them on the DOM
    for (const leader of leaders) {
        leadersElement.innerHTML += leaderRepresentation(leader);
    }
}

export default leaderList;