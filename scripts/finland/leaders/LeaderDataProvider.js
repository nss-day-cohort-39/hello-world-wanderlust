//This file contains the list of leaders that should appear on the Mongolia page

const leaderCollection = [{
    role: "President",
    name: "Sauli Niinistö"
}
];

//function exports a copy of the leaderCollection array of objects
export const getLeaders = () => {
return leaderCollection.slice();
}