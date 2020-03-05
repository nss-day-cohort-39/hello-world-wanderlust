//function that creates an HTML representation of the leaders on the Mongolia page

const leaderRepresentation = (leader) => {
    return `
        <li>${leader.name}: ${leader.role}</li>
    `;
}

export default leaderRepresentation;