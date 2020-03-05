//This file contains the list of leaders that should appear on the Greece page

const leaderCollection = [{
    name: "Prokopis Pavlopoulos",
    role: "President"
},
{
    name: "Kyriakos Mitsotakis",
    role: "Prime Minister"
},
{
    name: "Konstantinos Tasoulas",
    role: "Speaker"
}
];

//function exports a copy of the leaderCollection array of objects
export const getLeaders = () => {
return leaderCollection.slice();
}