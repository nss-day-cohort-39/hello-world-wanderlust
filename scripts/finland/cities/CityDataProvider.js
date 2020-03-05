//This file contains the list of cities that should appear on the Mongolia page

const cityCollection = [{
    name: "Helsinki",
    population: "631,695"
},
{
    name: "turku",
    population: "186,756"
},
{
    name: "Tampere",
    population: "226,696"
}
];

//function exports a copy of the cityCollection array of objects
export const getCities = () => {
return cityCollection.slice();
}