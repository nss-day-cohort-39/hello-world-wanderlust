//This file contains the list of landmarks that should appear on the Mongolia page

const landmarkCollection = [{
        name: "Bayangiin Nuruu Petroglyphs",
        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/13/9b/83/9a/beautiful-ancient-petroglyphs.jpg",
        description: "The name rougly translates to \"Rich Mountainsides\". It is an extremely well-preserved site featuring petroglyps from approximately 3000 BCE. The interesting drawings depict various animals and scenes from daily life."
    },
    {
        name: "Bayanzag (The Flaming Cliffs)",
        image: "https://cdn.hswstatic.com/gif/resurrect-dinosaurs-1-orig.jpg",
        description: "A region of the Gobi Desert in the Ömnögovi Province of Mongolia, in which important fossil finds have been made. It was given this name by American paleontologist Roy Chapman Andrews, who visited in the 1920s. The area is most famous for yielding the first discovery of dinosaur eggs. Other finds in the area include specimens of Velociraptor and various eutherian mammals. It is illegal to remove fossils from the area without appropriate permits. The area's nickname refers to the red or orange color of the sandstone cliffs which are especially at a sunset."
    },
    {
        name: "Amarbayasgalant Monastery",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Amarbayasgalant_monastery_temple_01.JPG",
        description: "The \"Monastery of Tranquil Felicity\", is one of the three largest Buddhist monastic centers in Mongolia. The monastery was established and funded by order of Manchu Yongzheng Emperor (and completed under his successor the Qianlong Emperor) to serve as a final resting place for Zanabazar (1635–1723), the first Jebtsundamba Khutuktu, or spiritual head of Tibetan Buddhism for the Khalkha in Outer Mongolia and a spiritual mentor to both emperors' ancestor, the Kangxi Emperor. Amarbayasgalant was one of the very few monasteries to have partly escaped destruction during the Stalinist purges of 1937, after which only the buildings of the central section remained. Today, only 28 temples remain. Restoration work began in 1988 with funds provided by UNESCO and private sources and some of the new statuary was commissioned in New Delhi, India."
    }

];

//function exports a copy of the landmarkCollection array of objects
export const getLandmarks = () => {
    return landmarkCollection.slice();
}