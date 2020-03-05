//function that creates an HTML representation of a landmark on the Greece page

const greekLandmark = (landmark) => {
    return `
        <div class="landmark-info">
            <div>
                <img class="landmark" src="${landmark.image}" alt="${landmark.name}">
            </div>
            <div>
                <h3>${landmark.name}</h3>
                <p>${landmark.description}</p>
            </div>
        </div>
    `;
}

export default greekLandmark;