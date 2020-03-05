//This file contains the list of leaders that should appear on the Mongolia page

const leaderCollection = [{
        name: "Khaltmaagiin Battulga",
        role: "President"
    },
    {
        name: "Ukhnaagiin Khürelsükh",
        role: "Prime Minister"
    },
    {
        name: "Otgonbayar Yondon",
        role: "Mongolian Ambassador to the United States"
    }
];

//function exports a copy of the leaderCollection array of objects
export const getLeaders = () => {
    return leaderCollection.slice();
}