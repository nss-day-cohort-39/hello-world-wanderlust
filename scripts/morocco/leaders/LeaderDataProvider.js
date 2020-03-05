//This file contains the list of leaders that should appear on the Morocco page

const leaderCollection = [{
    name: "Mohammed VI",
    role: "King"
},
{
    name: "Saadeddine Othmani",
    role: "Prime Minister"
}
];

//function exports a copy of the leaderCollection array of objects
export const getLeaders = () => {
return leaderCollection.slice();
}