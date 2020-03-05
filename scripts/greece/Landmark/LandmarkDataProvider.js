//This file contains the list of landmarks that should appear on the Greece page

const landmarkCollection = [{
    name: "Mykonos Windmills",
    image: "https://rtwin30days.com/wp-content/uploads/2010/06/Mykonos-362.jpg",
    description: "The Mykonos windmills are iconic feature of the Greek island of the Mykonos. The windmills are the first thing seen when coming into the harbour of Alefkandra, as they stand on a hill overlooking the area. There are currently 16 windmills on Mykonos of which seven are positioned on the landmark hill in Chora. Most of them were built by the Venetians in the 16th century. They were primarily used to mill wheat. They were an important source of income for the inhabitants. The architecture of each of them is similar, all have a round shape, white colour and a pointed roof and very small windows. One of these windmills has been transformed into a museum. The whole village of Chora and part of the harbour are visible from this point."
},
{
    name: "Caldera of Santorini",
    image: "https://img.theculturetrip.com/1024x574/smart/wp-content/uploads/2016/09/1200px-view_of_oia_and_fira.jpg",
    description: "The volcanic complex of Santorini is the most active part of the South Aegean Volcanic Arc, which includes the volcanoes of Methana, Milos, Santorini and Nisyros. It marks the subduction of the African tectonic plate underneath the Aegean subplate of the Eurasian tectonic plate, at a rate of up to 5 cm per year in a northeasterly direction. It is characterized by earthquakes at depths of 150–170 km."
},
{
    name: "The Portara at the Temple of Apollo",
    image: "https://www.naxos.gr/wp-content/uploads/2018/03/%CE%9D%CE%B1%CF%8C%CF%82-%CE%91%CF%80%CF%8C%CE%BB%CE%BB%CF%89%CE%BD%CE%B1-%CE%A0%CE%BF%CF%81%CF%84%CE%AC%CF%81%CE%B1.jpg",
    description: "A huge marble gate and the single remaining part of an unfinished temple of Apollo of 530 BC, is the island’s emblem and main landmark. Standing on the islet of Palatia, at the entrance to Naxos harbor, it comprises four marble parts weighing about 20 tons each."
}

];

//function exports a copy of the landmarkCollection array of objects
export const getGreeceLandmarks = () => {
return landmarkCollection.slice();
}