//This file contains the list of cities that should appear on the Mongolia page

const cityCollection = [{
        name: "Ulaanbaatar",
        population: "1,372,000"
    },
    {
        name: "Erdenet",
        population: "83,379"
    },
    {
        name: "Darkhan",
        population: "74,738"
    }
];

//function exports a copy of the cityCollection array of objects
export const getCities = () => {
    return cityCollection.slice();
}