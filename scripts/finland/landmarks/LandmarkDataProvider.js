//This file contains the list of landmarks that should appear on the Mongolia page

const landmarkCollection = [{
    name: "Fortress of Suomenlinna",
    image: "https://whc.unesco.org/uploads/thumbs/site_0583_0004-1200-630-20151104174432.jpg",
    description: "The Fortress of Suimenlinna, also known as the Fortress of Finland was built in the late 18th century over a group of islands at the entrace to Helsinki's harbor. Historically, the fortress was the main station in FInland for armed forces during its time under the Swedish realm, and was occupied by Russian forces in the early 19th century."
},
{
    name: "Petajavesi Old Church",
    image: "https://www.sophiesworld.net/wp-content/uploads/2015/04/DSC02780.jpg",
    description: "The Petajavesi Old Church in central Finland was built from logs between 1763 and 1765 in a style of architecture and mode of construction specific to eastern Scandinavia. The church is open to visitors daily in summer and by appointment in winter; guided tours are available. Services are conducted on Sunday mornings in summer, and concerts are offered on Wednesday evenings, as of publication."
},
{
    name: "Olavinlinna Castle",
    image: "https://i.redd.it/d3jz5qh5r4511.jpg",
    description: "The Olavinlinna castle overlooks the Lakeland region town of Savonlinna from its rocky islet setting, it's called one of Europe's most dramatic castles by Lonely Planet. It was maintained as an antinquity and now a tourist attracation, Olavinlinna Castle is best known today for the opera festival held there annually."
}

];

//function exports a copy of the landmarkCollection array of objects
export const getLandmarks = () => {
return landmarkCollection.slice();
}