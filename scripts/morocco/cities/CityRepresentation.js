//function that creates an HTML representation of a city on the Morocco page

const cityRepresentation = (city) => {
    return `
        <li>${city.name}: ${city.population}</li>
    `;
}

export default cityRepresentation;