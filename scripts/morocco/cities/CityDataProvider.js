//This file contains the list of cities that should appear on the Mongolia page

const cityCollection = [{
    name: "Marrakesh",
    population: "1,003,000"
},
{
    name: "Casablanca",
    population: "3,359,818"
},
{
    name: "Fes",
    population: "1,224,000"
}
];

//function exports a copy of the cityCollection array of objects
export const getCities = () => {
return cityCollection.slice();
}