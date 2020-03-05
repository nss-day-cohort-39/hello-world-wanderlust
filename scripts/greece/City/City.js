//function that creates an HTML representation of a city on the Mongolia page

const greekCity = (city) => {
    return `
        <li>${city.name}: ${city.population}</li>
    `;
}

export default greekCity;