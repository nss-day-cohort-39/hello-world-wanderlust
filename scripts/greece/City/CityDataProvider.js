//This file contains the list of islands that should appear on the Greece page

const greekCityCollection = [
    {
        name: "Naxos",
        population: "20,837"
    },

    {
    name: "Santorini",
    population: "10,500"
},
{
    name: "Mykonos",
    population: "10,134"
},
];

//function exports a copy of the cityCollection array of objects
export const getGreekCities = () => {
return greekCityCollection.slice();
}