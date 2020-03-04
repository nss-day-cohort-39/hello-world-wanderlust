//This file contains the list of landmarks that should appear on the Morocco page

const landmarkCollection = [{
    name: "Marrakesh Medina",
    image: "https://www.planetware.com/photos-large/MAR/morocco-marrakesh-medina-djemma-el-fna-square.jpg",
    description: "The bustling and vibrant buzz of Marrakesh medina sums up Morocco for many visitors and is a major tourist attraction. The old city is entered from the vast plaza of Djemma el-fna Square where, it seems, half the city converges throughout the day and into the evening to hang out with the stall vendors, traditional musicians, snake charmers, and random acrobats."
},
{
    name: "Hassan II Mosque",
    image: "https://www.planetware.com/photos-large/MAR/morocco-casablanca-hassan-ii-mosque-facade.jpg",
    description: "Casablanca's major point of interest and landmark building, the Hassan II Mosque is a lavish symbol not only of the city, but also of Morocco itself. This modern mosque (finished in 1993) doesn't do things by halves. The decoration detail covering every centimeter of the mammoth two-hectare site took 10,000 artisans to complete."
},
{
    name: "Oudaias Kasbah",
    image: "https://www.planetware.com/photos-large/MAR/morocco-rabat-oudaias-kasbah.jpg",
    description: "Morocco has plenty of beautiful old town areas but Rabat's Oudaias Kasbah neighborhood has to be one of the country's most picturesque. This is a peaceful and perfectly quaint district that feels miles away from the city, despite being right in the city's core. Inside the walls of this old fortress, the lanes of neat white-and-blue houses rimmed by colorful flowerpots and flapping washing have a lost-in-time atmosphere that's hard to beat."
}

];

//function exports a copy of the landmarkCollection array of objects
export const getLandmarks = () => {
return landmarkCollection.slice();
}