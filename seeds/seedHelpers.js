// Array 1 (Descriptors)
const descriptors = [
  "Redwood",
  "Ancient",
  "Forest",
  "Enchanted",
  "Wilderness",
  "Majestic",
  "Serene",
  "Hidden",
  "Tranquil",
  "Whispers",
  "Mystic",
  "Secret",
  "Peaceful",
  "Misty",
  "Whispering",
  "Sacred",
  "Solitude",
  "Twilight",
  "Rustic",
  "Starry",
  "Emerald",
  "Secluded",
  "Dreamy",
  "Silent",
  "Lush",
  "Shady",
  "Golden",
  "Echoing",
  "Wild",
  "Soothing",
  "Enchanted",
  "Majestic",
  "Serene",
  "Hidden",
  "Tranquil",
  "Whispers",
  "Mystic",
  "Secret",
  "Peaceful",
  "Misty",
];

// Array 2 (Places)
const places = [
  "Creekside",
  "River",
  "Backcountry",
  "Ghost Town",
  "Lakefront",
  "Valley",
  "Meadow",
  "Summit",
  "Canyon",
  "Oasis",
  "Ravine",
  "Ridge",
  "Beachfront",
  "Waterfall",
  "Cliffside",
  "Island",
  "Hollow",
  "Plateau",
  "Gorge",
  "Cave",
  "Bluff",
  "Dunes",
  "Treetop",
  "Overlook",
  "Cavern",
  "Marsh",
  "Spring",
  "Prairie",
  "Spire",
  "Refuge",
  "Island",
  "Hollow",
  "Plateau",
  "Gorge",
  "Cave",
  "Bluff",
  "Dunes",
  "Treetop",
  "Overlook",
  "Cavern",
];

const campgroundDescriptions = [
  `Nestled in the heart of the ${descriptors[0]} ${places[0]}, our campground offers a ${descriptors[1]} retreat. ${descriptors[2]} lakes, ${descriptors[3]} pines, and ${descriptors[4]} mornings create an ${descriptors[5]} atmosphere, perfect for peace-seekers and adventurers alike.`,
  `Explore the hidden treasures of our ${descriptors[6]} escape. As you embark on this ${descriptors[7]} journey, secrets of the natural world will unfold. From ${descriptors[8]} meadows to ${descriptors[9]} canyons, discover your dream outdoor paradise.`,
  `Beneath the ${descriptors[10]} twilight, our ${descriptors[11]} camp provides a ${descriptors[12]} respite from city life. Amidst ${descriptors[13]} surroundings and ${descriptors[14]} woodlands, you'll find echoes of a bygone era—a ${descriptors[15]} oasis where time slows down.`,
  `In the heart of the ${descriptors[16]} wilderness, secluded from the hustle and bustle, find your way to a ${descriptors[17]} refuge. An ${descriptors[18]} of calm and a ${descriptors[19]} of solitude, this is a true ${descriptors[20]} escape for the soul.`,
  `Whispering winds and the magic of twilight await. In the ${descriptors[21]} ${places[1]} of nature, explore the ${descriptors[22]} realm of ${places[2]} and ${places[3]}. Our camp offers a ${descriptors[23]} haven for every wanderer's spirit.`,
  `Experience the ${descriptors[24]} of history at our revitalized ${places[4]} campground. Amidst the ${descriptors[25]} sands, find adventure where legends live. From ${places[5]} to ${places[6]}, discover the secrets of the desert.`,
  `Bask in the ${descriptors[26]} hues of the setting sun by the ${places[7]}, where the water meets the wild. A ${descriptors[27]} camp for relaxation and rejuvenation, where serenity flows and your soul finds refuge.`,
  `A ${descriptors[28]} ${places[8]} camp, where dreams touch the sky. In a ${descriptors[29]} meadow, under the starlit canvas, a journey begins. The adventure is yours to take, and the summit is just the start.`,
  `Nestled on the tranquil ${places[9]} banks, the wilderness comes alive. As morning mist rises, embark on a ${descriptors[30]} journey through ${places[10]} and lush, shaded pathways. A ${descriptors[31]} paradise awaits the daring soul.`,
  `From the ${descriptors[32]} ${places[11]} to the pristine ${places[12]}, a journey awaits in the heart of this ${descriptors[33]}. Tranquil solitude is your companion, where whispers of the wild guide your way.`,
  `${descriptors[20]} ${places[20]} is your gateway to a ${descriptors[21]} adventure. Nestled among ${descriptors[22]} meadows and ${descriptors[23]} lakes, it's the perfect escape from the ordinary.`,
  `Explore the allure of a ${descriptors[24]} ${places[21]}. Amidst towering ${descriptors[25]} and ${descriptors[26]} cliffs, our camp offers a ${descriptors[27]} retreat where you can embrace the wild beauty of nature.`,
  `Discover the tranquil charm of a ${descriptors[28]} ${places[22]}. With ${descriptors[29]} forests and ${descriptors[30]} trails, it's a serene oasis where you can embrace the ${descriptors[31]} wonders of the wild.`,
  `In the heart of the ${places[23]}, our camp offers a ${descriptors[32]} retreat from city life. Amidst ${descriptors[33]} surroundings and ${descriptors[34]} woodlands, find echoes of a bygone era and a peaceful oasis.`,
  `Bask in the serenity of a ${descriptors[35]} ${places[24]}. It's a refuge from the hustle and bustle, an ${descriptors[36]} oasis of calm and solitude, where time slows down and dreams take flight.`,
  `Experience the allure of a ${descriptors[37]} ${places[25]}. With ${descriptors[38]} streams and a backdrop of ${descriptors[39]}, it's a haven for those seeking a ${descriptors[39]} backcountry escape.`,
  `Journey to a ${descriptors[3]} ${places[26]}, where echoes of the past linger and legends come to life. Discover the hidden treasures of a ${descriptors[28]} canyon, where adventure awaits.`,
  `Amidst the ${descriptors[25]} charm of a ${places[27]}, our camp offers an idyllic setting for relaxation. It's a serene haven where waves whisper serenity, and the world becomes your playground.`,
  `Trek to the heart of a ${descriptors[31]} ${places[28]}. Here, the breathtaking landscapes invite exploration and the ${descriptors[23]} atmosphere invites peace. It's an adventure waiting to be written in your story.`,
  `Nestled in the heart of a ${descriptors[12]} ${places[29]}, our camp invites you to discover the serene beauty of ${descriptors[17]} landscapes. With ${descriptors[25]} meadows and ${descriptors[37]} lakes, it's a paradise for the curious traveler.`,
  `Nestled in the heart of the ${descriptors[0]} ${places[0]}, our campground offers a ${descriptors[1]} retreat. ${descriptors[2]} lakes, ${descriptors[3]} pines, and ${descriptors[4]} mornings create an ${descriptors[5]} atmosphere, perfect for peace-seekers and adventurers alike.`,
  `Explore the hidden treasures of our ${descriptors[6]} escape. As you embark on this ${descriptors[7]} journey, secrets of the natural world will unfold. From ${descriptors[8]} meadows to ${descriptors[9]} canyons, discover your dream outdoor paradise.`,
  `Beneath the ${descriptors[10]} twilight, our ${descriptors[11]} camp provides a ${descriptors[12]} respite from city life. Amidst ${descriptors[13]} surroundings and ${descriptors[14]} woodlands, you'll find echoes of a bygone era—a ${descriptors[15]} oasis where time slows down.`,
  `In the heart of the ${descriptors[16]} wilderness, secluded from the hustle and bustle, find your way to a ${descriptors[17]} refuge. An ${descriptors[18]} of calm and a ${descriptors[19]} of solitude, this is a true ${descriptors[20]} escape for the soul.`,
  `Whispering winds and the magic of twilight await. In the ${descriptors[21]} ${places[1]} of nature, explore the ${descriptors[22]} realm of ${places[2]} and ${places[3]}. Our camp offers a ${descriptors[23]} haven for every wanderer's spirit.`,
  `Experience the ${descriptors[24]} of history at our revitalized ${places[4]} campground. Amidst the ${descriptors[25]} sands, find adventure where legends live. From ${places[5]} to ${places[6]}, discover the secrets of the desert.`,
  `Bask in the ${descriptors[26]} hues of the setting sun by the ${places[7]}, where the water meets the wild. A ${descriptors[27]} camp for relaxation and rejuvenation, where serenity flows and your soul finds refuge.`,
  `A ${descriptors[28]} ${places[8]} camp, where dreams touch the sky. In a ${descriptors[29]} meadow, under the starlit canvas, a journey begins. The adventure is yours to take, and the summit is just the start.`,
  `Nestled on the tranquil ${places[9]} banks, the wilderness comes alive. As morning mist rises, embark on a ${descriptors[30]} journey through ${places[10]} and lush, shaded pathways. A ${descriptors[31]} paradise awaits the daring soul.`,
  `From the ${descriptors[32]} ${places[11]} to the pristine ${places[12]}, a journey awaits in the heart of this ${descriptors[33]}. Tranquil solitude is your companion, where whispers of the wild guide your way.`,
  `${descriptors[20]} ${places[20]} is your gateway to a ${descriptors[21]} adventure. Nestled among ${descriptors[22]} meadows and ${descriptors[23]} lakes, it's the perfect escape from the ordinary.`,
  `Explore the allure of a ${descriptors[24]} ${places[21]}. Amidst towering ${descriptors[25]} and ${descriptors[26]} cliffs, our camp offers a ${descriptors[27]} retreat where you can embrace the wild beauty of nature.`,
  `Discover the tranquil charm of a ${descriptors[28]} ${places[22]}. With ${descriptors[29]} forests and ${descriptors[30]} trails, it's a serene oasis where you can embrace the ${descriptors[31]} wonders of the wild.`,
  `In the heart of the ${places[23]}, our camp offers a ${descriptors[32]} retreat from city life. Amidst ${descriptors[33]} surroundings and ${descriptors[34]} woodlands, find echoes of a bygone era and a peaceful oasis.`,
  `Bask in the serenity of a ${descriptors[35]} ${places[24]}. It's a refuge from the hustle and bustle, an ${descriptors[36]} oasis of calm and solitude, where time slows down and dreams take flight.`,
  `Experience the allure of a ${descriptors[37]} ${places[25]}. With ${descriptors[38]} streams and a backdrop of ${descriptors[39]}, it's a haven for those seeking a ${descriptors[39]} backcountry escape.`,
  `Journey to a ${descriptors[3]} ${places[26]}, where echoes of the past linger and legends come to life. Discover the hidden treasures of a ${descriptors[28]} canyon, where adventure awaits.`,
  `Amidst the ${descriptors[25]} charm of a ${places[27]}, our camp offers an idyllic setting for relaxation. It's a serene haven where waves whisper serenity, and the world becomes your playground.`,
  `Trek to the heart of a ${descriptors[31]} ${places[28]}. Here, the breathtaking landscapes invite exploration and the ${descriptors[23]} atmosphere invites peace. It's an adventure waiting to be written in your story.`,
  `Nestled in the heart of a ${descriptors[12]} ${places[29]}, our camp invites you to discover the serene beauty of ${descriptors[17]} landscapes. With ${descriptors[25]} meadows and ${descriptors[37]} lakes, it's a paradise for the curious traveler.`,
];

const campImages = [
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957269/YelpCamp/mm1pftjqifledh5dp07v.jpg",
    filename: "YelpCamp/mm1pftjqifledh5dp07v",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957262/YelpCamp/akidnngjpm2sturryffb.jpg",
    filename: "YelpCamp/akidnngjpm2sturryffb",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957260/YelpCamp/qjejx3uafb1bu7vuvt4o.jpg",
    filename: "YelpCamp/qjejx3uafb1bu7vuvt4o",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957259/YelpCamp/us2xhptanehnmapinogs.jpg",
    filename: "YelpCamp/us2xhptanehnmapinogs",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957256/YelpCamp/sny3ji4lvqgmqimqg6h3.jpg",
    filename: "YelpCamp/sny3ji4lvqgmqimqg6h3",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957255/YelpCamp/sytrpvpuysvlohpi3tas.jpg",
    filename: "YelpCamp/sytrpvpuysvlohpi3tas",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957255/YelpCamp/aypynewqnofojlydrouq.jpg",
    filename: "YelpCamp/aypynewqnofojlydrouq",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957254/YelpCamp/svyq7bv42pdtclxgxuic.jpg",
    filename: "YelpCamp/svyq7bv42pdtclxgxuic",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957253/YelpCamp/zjyxzbu2qby8psqgzqfy.jpg",
    filename: "YelpCamp/zjyxzbu2qby8psqgzqfy",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957252/YelpCamp/nho4cb1y2dtkrkingl5e.jpg",
    filename: "YelpCamp/nho4cb1y2dtkrkingl5e",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957252/YelpCamp/ahjrfvq8mahx6w9ea5vx.jpg",
    filename: "YelpCamp/ahjrfvq8mahx6w9ea5vx",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957251/YelpCamp/kf0oil8lp5wbenreakyg.jpg",
    filename: "YelpCamp/kf0oil8lp5wbenreakyg",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957250/YelpCamp/zxlp3zaherogjh0cuoi6.jpg",
    filename: "YelpCamp/zxlp3zaherogjh0cuoi6",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957250/YelpCamp/mikocervfqxfwy1opxj1.jpg",
    filename: "YelpCamp/mikocervfqxfwy1opxj1",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957250/YelpCamp/tko1cho6xzelh7gxxj7k.jpg",
    filename: "YelpCamp/tko1cho6xzelh7gxxj7k",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957249/YelpCamp/rwu7e7er7mvbkw9sz9nc.jpg",
    filename: "YelpCamp/rwu7e7er7mvbkw9sz9nc",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957249/YelpCamp/z0j7egbtc64uepdjaroa.jpg",
    filename: "YelpCamp/z0j7egbtc64uepdjaroa",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957248/YelpCamp/xb5hwiakt0by3yzslvvi.jpg",
    filename: "YelpCamp/xb5hwiakt0by3yzslvvi",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957248/YelpCamp/bxtfqoeavzqnudze9t7g.jpg",
    filename: "YelpCamp/bxtfqoeavzqnudze9t7g",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957248/YelpCamp/dnq3dwlghhgarm9yj4fq.jpg",
    filename: "YelpCamp/dnq3dwlghhgarm9yj4fq",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957248/YelpCamp/bnlatcuddaksiku1dbnz.jpg",
    filename: "YelpCamp/bnlatcuddaksiku1dbnz",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957247/YelpCamp/vut1qcfcsd4xlx8vcwtj.jpg",
    filename: "YelpCamp/vut1qcfcsd4xlx8vcwtj",
  },
  {
    url: "http://res.cloudinary.com/dewpck9nt/image/upload/v1697957247/YelpCamp/xt0zhrosk5dguiehioqb.jpg",
    filename: "YelpCamp/xt0zhrosk5dguiehioqb",
  },
];


module.exports = { descriptors, places, campgroundDescriptions, campImages };
