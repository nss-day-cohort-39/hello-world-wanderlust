//function that creates an HTML representation of the leaders on the Greece page

const leaderRepresentation = (leader) => {
    return `
        <li>${leader.name}: ${leader.role}</li>
    `;
}

export default leaderRepresentation;