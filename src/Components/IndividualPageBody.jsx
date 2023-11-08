import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, } from 'react-leaflet'
import axios from 'axios'
import LeafletMap from './LeafletMap';
import MapComponent from './MapComponent';



function IndividualPageBody ({individualSpot, loginAccount}) {
  // const [center, setCenter] = useState([0, 0]); //geolocation

  const spotAddressPositionCords = [51.505, -0.09]


const demoSpot = [
  {
    name: 'Lavin Place',
     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sit assumenda cumque delectus illo quibusdam veniam eligendi blanditiis. Nobis ab id, hic vero fuga quos',
      website: 'www.lavin-place.com', 
      openingTime: '09:00AM', 
      closingTime: '07:00PM', 
      category: 'Lounge', 
      phoneNumber: '09022622842', 
      email: 'meetpiko@gmail.com', 
      address:'Gwaripa, Abuja', 
      facebookHandle: 'Lavin Place', 
      instagramHandle: 'Lavin-Place', 
      twitterHandle: 'Wine Store', 
      features: ['Food', 'Games', 'Karoake', 'Cocktails', 'Wine'],
      images1 : '../../assets/images/chicken.jpg', 
      images2 : '../../assets/images/chicken.jpg', 
      images3 : '../../assets/images/chicken.jpg', 
      images4 : '../../assets/images/chicken.jpg', 
      video: '../../assets/videos/Restaurant.mp4',
      activitiesDemo: [
        {
          name: 'Food',
          activities: ['Burger', 'Fish', 'Shawarma', 'Chineese Rice'],
          minimumBudget: 'N4,500',
        },
        {
          name: 'Food',
          activities: ['Burger', 'Fish', 'Shawarma', 'Chineese Rice'],
          minimumBudget: 'N4,500'
        },
        {
          name: 'Game',
          activities: ['Burger', 'Fish', 'Shawarma', 'Chineese Rice'],
          minimumBudget: 'N4,500'
        },
        {
          name: 'Wine',
          activities: ['Burger', 'Fish', 'Shawarma', 'Chineese Rice'],
          minimumBudget: 'N8,500'
        },
        {
          name: 'Cocktaiil',
          activities: ['Burger', 'Fish', 'Shawarma', 'Chineese Rice'],
          minimumBudget: 'N6,500'
        },
        {
          name: 'Karoake',
          activities: [],
          minimumBudget: 'N1,500'
        },
        {
          name: 'Food',
          activities: ['Burger', 'Fish', 'Shawarma', 'Chineese Rice'],
          minimumBudget: 'N4,500'
        },
      ] 
  }, 
  {
    name: 'Vistro Lounge',
     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sit assumenda cumque delectus illo quibusdam veniam eligendi blanditiis. Nobis ab id, hic vero fuga quos',
      website: 'www.lavin-place.com', 
      openingTime: '09:00AM', 
      closingTime: '07:00PM', 
      category: 'Bar', 
      phoneNumber: '09022622842', 
      email: 'meetpiko@gmail.com', 
      address:'Gwaripa, Abuja', 
      facebookHandle: 'Lavin Place', 
      instagramHandle: 'Lavin-Place', 
      twitterHandle: 'Wine Store', 
      features: ['Food', 'Games', 'Karoake', 'Cocktails', 'Wine'],
      images1 : '../../assets/images/hero-carousel/lounge.jpg', 
      images2 : '../../assets/images/hero-carousel/hotels.jpg', 
      images3 : '../../assets/images/hero-carousel/art.jpg', 
      images4 : '../../assets/images/hero-carousel/chicken.jpg', 
      video: '../../assets/videos/Restaurant.mp4',
      activitiesDemo: [
        {
          name: 'Food',
          activities: ['Burger', 'Fish', 'Shawarma', 'Chineese Rice'],
          minimumBudget: 'N4,500'
        },
        {
          name: 'Food',
          activities: ['Burger', 'Fish', 'Shawarma', 'Chineese Rice'],
          minimumBudget: 'N4,500'
        },
        {
          name: 'Games',
          activities: ['Burger', 'Fish', 'Shawarma', 'Chineese Rice'],
          minimumBudget: 'N4,500'
        },
        {
          name: 'Wine',
          activities: ['Burger', 'Fish', 'Shawarma', 'Chineese Rice'],
          minimumBudget: 'N8,500'
        },
        {
          name: 'Cocktaiil',
          activities: ['Burger', 'Fish', 'Shawarma', 'Chineese Rice'],
          minimumBudget: 'N6,500'
        },
        {
          name: 'Karoake',
          activities: [],
          minimumBudget: 'N1,500'
        },
        {
          name: 'Food',
          activities: ['Burger', 'Fish', 'Shawarma', 'Chineese Rice'],
          minimumBudget: 'N4,500'
        },
      ] 
  }, 
]

const places = [
  {
      name: "Nigerian Delights",
      category: "Restaurant",
      address: "456 Yummy Avenue, Abuja, Nigeria",
      description: "A restaurant renowned for its authentic Nigerian cuisine, from delicious soups to mouthwatering local dishes.",
      website: "https://www.nigeriandelights.ng",
      openingTime: "11:30 AM",
      closingTime: "10:00 PM",
      openingDays: "Monday-Sunday",
      phone: "+234-789-123-4567",
      email: "info@nigeriandelights.ng",
      socialMedia: {
        facebook: "@NigerianDelights",
        instagram: "@NigerianDelights",
        twitter: "@DelightsNG",
      },
      features: [
        {
          name: "Food Menu",
          minimumBudget: 'NGN3,000',
          subFeatures: [
            "Appetizers",
            "Main Courses",
            "Desserts",
            "Beverages",
            "Vegetarian Options",
          ],
        },
        {
          name: "Live Entertainment",
          minimumBudget: 'NGN3,000',
          subFeatures: [
            "Live Music",
            "Karaoke Nights",
            "Comedy Shows",
            "Cultural Performances",
            "DJ Nights",
          ],
        },
        {
          name: "Outdoor Dining",
          minimumBudget: 'NGN3,000',
          subFeatures: [
            "Alfresco Seating",
            "Garden Dining",
            "Riverside Tables",
            "Sunset Views",
            "Bonfire Evenings",
          ],
        },
        {
          name: "Private Dining",
          minimumBudget: 'NGN3,000',
          subFeatures: [
            "Romantic Dinners",
            "Group Celebrations",
            "Business Meetings",
            "Family Gatherings",
            "Customizable Menus",
          ],
        },
        {
          name: "Cultural Events",
          minimumBudget: 'NGN3,000',
          subFeatures: [
            "Traditional Dance Nights",
            "Themed Dinners",
            "Art Exhibitions",
            "Costume Nights",
            "Storytelling Sessions",
          ],
        },
        {
          name: "Cooking Classes",
          minimumBudget: 'NGN3,000',
          subFeatures: [
            "Learn to Cook Jollof Rice",
            "Suya-Making Workshops",
            "Egusi Soup Masterclasses",
            "Nigerian Dessert Classes",
            "Chef's Special Cooking Workshops",
          ],
        },
      ],
      video: "https://player.vimeo.com/external/357872394.sd.mp4?s=2c4ed9368cbb10ab2f54ecef27b5674195be8ce8&profile_id=164&oauth2_token_id=57447761",
      images: [
          "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800",
        // "https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      name: "Luxe Lounge",
      category: "Lounge",
      address: "789 Opulence Street, Lagos, Nigeria",
      description: "A high-end lounge offering a sophisticated atmosphere, signature cocktails, and live entertainment.",
      website: "https://www.luxelounge.ng",
      openingTime: "6:00 PM",
      closingTime: "2:00 AM",
      openingDays: "Thursday-Saturday",
      phone: "+234-987-654-3210",
      images: [
        "https://images.pexels.com/photos/6174144/pexels-photo-6174144.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/5662826/pexels-photo-5662826.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/3566120/pexels-photo-3566120.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1484514/pexels-photo-1484514.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      video: "https://player.vimeo.com/external/490365542.sd.mp4?s=c6085407ae0a6f3b295b162b24806da3378c268d&profile_id=164&oauth2_token_id=57447761",
      email: "info@luxelounge.ng",
      socialMedia: {
        facebook: "@LuxeLounge",
        instagram: "@LuxeLoungeNG",
        twitter: "@LuxeLoungeNaija"
      },
      features: [
        {
          name: "Signature Cocktails",
          minimumBudget: 'NGN3,000',
          subFeatures: [
            "Classic Cocktails",
            "Mixologist Specials",
            "Mocktails",
            "Exclusive Luxe Creations",
            "Happy Hour Deals"
          ]
        },
        {
          name: "Live Entertainment",
          minimumBudget: 'NGN3,000',
          subFeatures: [
            "Live Bands",
            "DJ Sets",
            "Jazz Nights",
            "Acoustic Performances",
            "Dance Performances"
          ]
        },
        {
          name: "VIP Seating",
          minimumBudget: 'NGN3,000',
          subFeatures: [
            "Exclusive VIP Lounge",
            "Private Cabanas",
            "Bottle Service",
            "Premium Cigar Lounge",
            "Reserved Tables"
          ]
        },
        {
          name: "Theme Nights",
          minimumBudget: 'NGN3,000',
          subFeatures: [
            "80s Retro Night",
            "Latin Dance Night",
            "Casino Royale Night",
            "Masquerade Ball",
            "Hawaiian Luau Night"
          ]
        },
        {
          name: "Late-Night Dining",
          minimumBudget: 'NGN3,000',
          subFeatures: [
            "Gourmet Appetizers",
            "Midnight Snacks",
            "Charcuterie Boards",
            "Dessert Platters",
            "24/7 Pizza Delivery"
          ]
        },
        {
          name: "Events and Parties",
          minimumBudget: 'NGN3,000',
          subFeatures: [
            "Birthday Celebrations",
            "Corporate Events",
            "Bachelorette Parties",
            "Live Sports Screening",
            "Fashion Shows"
          ]
        }
      ]
    },
    {
      name: "Sunrise Suites",
      category: "Hotel",
      address: "101 Vacation Lane, Port Harcourt, Nigeria",
      description: "A luxurious hotel offering stunning views, comfortable rooms, and exceptional hospitality.",
      website: "https://www.sunrisesuites.ng",
      openingTime: "24/7",
      closingTime: "24/7",
      openingDays: "Open every day",
      phone: "+234-111-222-3333",
      images: [
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      video: "https://player.vimeo.com/external/371845943.sd.mp4?s=9f9a9acf4ca8cca89f12a5558b36ce2dcda1e0de&profile_id=164&oauth2_token_id=57447761",
      email: "reservations@sunrisesuites.ng",
      socialMedia: {
        facebook: "@SunriseSuitesPH",
        instagram: "@SunriseSuitesPH",
        twitter: "@SunrisePH"
      },
      features: [
        {
          name: "Luxury Accommodations",
          minimumBudget: 'NGN3,000',
          subFeatures: [
            "Deluxe Rooms",
            "Suites",
            "Presidential Suites",
            "Ocean View Rooms",
            "Jacuzzi Suites"
          ]
        },
        {
          name: "Dining Options",
          minimumBudget: 'NGN3,000',
          subFeatures: [
            "Fine Dining Restaurant",
            "24/7 Room Service",
            "Buffet Breakfast",
            "Poolside Bar",
            "In-room Dining"
          ]
        },
        {
          name: "Wellness Facilities",
          minimumBudget: 'NGN3,000',
          subFeatures: [
            "Spa and Massage Services",
            "Fitness Center",
            "Swimming Pool",
            "Sauna and Steam Room",
            "Yoga Classes"
          ]
        },
        {
          name: "Event Spaces",
          minimumBudget: 'NGN3,000',
          subFeatures: [
            "Conference Rooms",
            "Banquet Halls",
            "Wedding Venues",
            "Business Meeting Rooms",
            "Outdoor Event Spaces"
          ]
        },
        {
          name: "Concierge Services",
          minimumBudget: 'NGN3,000',
          subFeatures: [
            "Airport Transfers",
            "Tour and Excursion Bookings",
            "Car Rental",
            "Personalized Assistance",
            "Luggage Storage"
          ]
        },
        {
          name: "24/7 Customer Support",
          minimumBudget: 'NGN3,000',
          subFeatures: [
            "Round-the-Clock Front Desk",
            "Multilingual Staff",
            "Online Reservations",
            "Express Check-In/Check-Out",
            "Special Requests"
          ]
        }
      ]
    },
  {
    name: "Tranquil Escapes Spa",
    category: "Spa",
    address: "567 Serenity Street, Enugu, Nigeria",
    description: "A serene spa that provides a range of therapeutic treatments and relaxation experiences.",
    website: "https://www.tranquilescapes.ng",
    openingTime: "10:00 AM",
    closingTime: "8: 00PM",
    openingDays: "Monday-Sunday",
    phone: "+234-555-555-5555",
        images: [
    "https://images.pexels.com/photos/3998013/pexels-photo-3998013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3998000/pexels-photo-3998000.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg?auto=compress&cs=tinysrgb&w=800",
  ],
  video: "https://player.vimeo.com/external/400261108.sd.mp4?s=a620c1aea9f8f84a90973edb3c2d040fabe9a901&profile_id=164&oauth2_token_id=57447761",
    email: "info@tranquilescapes.ng",
    socialMedia: {
      facebook: "@TranquilEscapes",
      instagram: "@TranquilEscapesNG",
      twitter: "@TranquilEnugu",
    },
    features: [
      {
        name: "Therapeutic Treatments",
        minimumBudget: 'NGN3,000',
        subFeatures: [
          "Swedish Massage",
          "Deep Tissue Massage",
          "Hot Stone Massage",
          "Aromatherapy",
          "Facials",
        ],
      },
      {
        name: "Relaxation Facilities",
        minimumBudget: 'NGN3,000',
        subFeatures: [
          "Steam Rooms",
          "Saunas",
          "Hydrotherapy",
          "Relaxation Lounges",
          "Zen Gardens",
        ],
      },
      {
        name: "Wellness Workshops",
        minimumBudget: 'NGN3,000',
        subFeatures: [
          "Yoga and Meditation",
          "Mindfulness Workshops",
          "Nutrition Seminars",
          "Stress Management",
          "Holistic Health",
        ],
      },
      {
        name: "Couples Retreat",
        minimumBudget: 'NGN3,000',
        subFeatures: [
          "Couples Massage",
          "Private Suites",
          "Romantic Packages",
          "Candlelit Dinners",
          "Intimate Escape",
        ],
      },
      {
        name: "Spa Parties",
        minimumBudget: 'NGN3,000',
        subFeatures: [
          "Bridal Showers",
          "Birthday Celebrations",
          "Girls' Night Out",
          "Corporate Retreats",
          "Customized Spa Packages",
        ],
      },
      {
        name: "Membership Programs",
        minimumBudget: 'NGN3,000',
        subFeatures: [
          "Monthly Subscriptions",
          "Discounted Services",
          "Exclusive Access",
          "Rewards Program",
          "Priority Booking",
        ],
      },
    ],
  }, 
  {
    name: "Golden Sands Beach",
    category: "Beach",
    address: "321 Shoreline Road, Calabar, Nigeria",
    description: "A picturesque beach known for its golden sands, water sports, and stunning sunsets.",
    website: "https://www.goldensandsbeach.ng",
    openingTime: "9:00 AM",
    closingTime: "7:00 PM",
    openingDays: "Monday-Sunday",
    phone: "+234-567-890-1234",
        images: [
          "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/1656687/pexels-photo-1656687.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/21787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
  ],
  video: "https://player.vimeo.com/external/329512887.sd.mp4?s=92b3d5138e2f23c8de1922a7df0b4b259147e229&profile_id=164&oauth2_token_id=57447761",
    email: "info@goldensandsbeach.ng",
    socialMedia: {
      facebook: "@GoldenSandsCalabar",
      instagram: "@GoldenSandsCalabar",
      twitter: "@SandsCalabar",
    },
    features: [
      {
        name: "Water Sports",
        minimumBudget: 'NGN3,000',
        subFeatures: [
          "Surfing",
          "Jet Skiing",
          "Parasailing",
          "Kayaking",
          "Snorkeling",
        ],
      },
      {
        name: "Beachside Dining",
        minimumBudget: 'NGN3,000',
        subFeatures: [
          "Beachfront Restaurants",
          "BBQ Picnics",
          "Fresh Seafood",
          "Cocktails and Drinks",
          "Sunset Dinners",
        ],
      },
      {
        name: "Beach Activities",
        minimumBudget: 'NGN3,000',
        subFeatures: [
          "Beach Volleyball",
          "Sandcastle Building",
          "Beach Yoga",
          "Live Music Events",
          "Beach Bonfires",
        ],
      },
      {
        name: "Scenic Views",
        minimumBudget: 'NGN3,000',
        subFeatures: [
          "Sunset Views",
          "Lighthouse Views",
          "Clifftop Lookouts",
          "Nature Trails",
          "Bird Watching",
        ],
      },
      {
        name: "Beach Events",
        minimumBudget: 'NGN3,000',
        subFeatures: [
          "Beach Parties",
          "Music Festivals",
          "Sports Tournaments",
          "Yoga Retreats",
          "Art and Craft Fairs",
        ],
      },
    ],
  },
  {
    name: "Paradise Haven Resort",
    category: "Resort",
    address: "222 Oasis Lane, Ibadan, Nigeria",
    description: "A luxurious resort offering comfortable accommodations, outdoor activities, and relaxation.",
    website: "https://www.paradisehavenresort.ng",
    openingTime: "9:00 AM",
    closingTime: "10:00 PM",
    openingDays: "Monday-Sunday",
    phone: "+234-876-543-2109",
        images: [
    "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/879010/pexels-photo-879010.jpeg?auto=compress&cs=tinysrgb&w=800",
  ],
  video: "https://player.vimeo.com/external/210743757.sd.mp4?s=18fc467e30fe0a3cf110ab4d430193f2afb5f865&profile_id=164&oauth2_token_id=57447761",
    email: "info@paradisehavenresort.ng",
    socialMedia: {
      facebook: "@ParadiseHavenIbadan",
      instagram: "@ParadiseHavenIbadan",
      twitter: "@HavenIbadan",
    },
    features: [
      {
        name: "Accommodations",
        minimumBudget: 'NGN3,000',
        subFeatures: [
          "Rooms and Suites",
          "Luxury Villas",
          "Family Cottages",
          "Lake View Lodges",
          "Treehouse Retreats",
        ],
      },
      {
        name: "Outdoor Activities",
        minimumBudget: 'NGN3,000',
        subFeatures: [
          "Swimming Pools",
          "Water Sports",
          "Hiking Trails",
          "Tennis Courts",
          "Golf Course",
        ],
      },
      {
        name: "Dining Options",
        minimumBudget: 'NGN3,000',
        subFeatures: [
          "Fine Dining Restaurant",
          "Poolside Bar and Grill",
          "Outdoor BBQs",
          "In-room Dining",
          "Private Chef Services",
        ],
      },
      {
        name: "Spa and Wellness",
        minimumBudget: 'NGN5,000',
        subFeatures: [
          "Spa Treatments",
          "Yoga and Meditation",
          "Fitness Center",
          "Wellness Retreats",
          "Health and Nutrition Consultations",
        ],
      },
      {
        name: "Events and Celebrations",
        minimumBudget: 'NGN2,000',
        subFeatures: [
          "Weddings and Receptions",
          "Corporate Retreats",
          "Private Parties",
          "Team Building Activities",
          "Cultural Festivals",
        ],
      },
      {
        name: "Adventure Tours",
        minimumBudget: 'NGN1,000',
        subFeatures: [
          "Wildlife Safaris",
          "Cultural Excursions",
          "Canopy Walks",
          "Bird Watching",
          "Historical Tours",
        ],
      },
    ],
  },
];

console.log(loginAccount)

  const [spot, setSpot] = useState({name: '', description: '', website: '', openingTime: '', category: '', phoneNumber: '', email: '', address:'', facebookHandle: '', instagramHandle: '', twitterHandle: '', features: []})

  const [activity, setActivity] = useState({name: '', activities:[], minimumBudget:''})



  //it will check the list of features and render the array of activities under it


  //For getting Spot data
    // useEffect(() => {
    //   axios.get('API URL').then((resp) => {
    //     setSpot({ ...spot, name:resp.data.name, description:resp.data.description, website:resp.data.website, category: resp.data.category, openingTime:resp.data.openingTime, phoneNumber:resp.data.phoneNumber, email:resp.data.email, address:resp.data.address, facebookHandle:resp.data.facebookHandle, instagramHandle:resp.data.instagramHandle, twitterHandle:resp.data.twitterHandle, features:resp.data.features})
    //   }).catch(err => {
    //     console.trace(err);
    //   })
    // }, [])
  
  
    //For getting Activities list each feature from 
    // useEffect(() => {
    //   axios.get('API URL').then((resp) => {
        
    //     //it loops through the array of features to select each feature, then compares the name of activity to the feature to get the activies under them
    //     spot.features.map(feature => {
    //       if (resp.data.name === feature)
    //       setActivity({...activity, name:resp.data.name, activities:resp.data.activities, minimumBudget:resp.data.minimumBudget})
    //     }).catch(err => {
    //       console.trace(err);
    //     })
    //   })
    // }, [])



 //For Location coordinates and Map
//  useEffect(() => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setCenter([latitude, longitude]);
//       },
//       error => {
//         console.error('Error getting user location:', error);
//       }
//     );
//   } else {
//     console.error('Geolocation is not supported by this browser.');
//   }
// }, []);


const nigeriaStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe",
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
  "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
  "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
]

function getLastWord(str) {
  // Remove leading and trailing whitespaces from the string
  str = str.trim();

  // Split the string into an array of words using whitespace as the delimiter
  const wordsArray = str.split(/\s+/);

  // Access the last element (last word) of the array
  let lastWord = wordsArray[wordsArray.length - 1];

  // Remove any trailing dot (if present) from the last word
  lastWord = lastWord.replace(/\.$/, '');

  return lastWord;
}


  return (

    <div>

    <div className=' mt-6 md:mt-14 mb-8 md:grid md:grid-cols-12 '>
      
      {/*Left Hand Side */}

      <div className='grid md:col-span-8'>

        {/* Title and info */}
        <div className=' ml-3 my-2 md:my-5'>
    {
      places.map((dspot, index) => (

        dspot.name === individualSpot ? 
        <div key={index} className='block md:hidden'>
        <button className=' text-white bg-orange-600 py-1 px-3 rounded font-medium rounded-bl-none text-xs m-1'>{dspot.category}</button>
          <button className=' text-white  py-1 px-3  font-medium  text-xs m-1'>{nigeriaStates.includes(getLastWord(dspot.address)) ? <span className='bg-orange-600 py-1 px-3 rounded rounded-bl-none'>#{getLastWord(dspot.address)}</span> : null}</button>
          </div> 

        : null
      ))
    }

{
      places.map((dspot, index) => (

        dspot.name === individualSpot ? 
          
        <div key={index}>
        <p className=' text-3xl sm:text-5xl text-left md:text-center font-bold'>{dspot.name}</p>
        <p className=' block sm:hidden text-slate-700 text-sm'>{dspot.address}</p>


        <div className='flex'>
        <p className=' flex md:hidden text-orange-700 italic underline mr-3 text-xs'><a href="#map"> Show Me Directions</a></p> {/*Takes you to the map */}
        <p className=' flex md:hidden text-orange-700 italic underline text-xs'><a href={dspot.website}> Check their website</a></p> {/*Takes you to the website */}
        </div>

        </div>
        : null
      ))
    }
        </div>



      {/* Video mobile */}

      <div className='mx-2 block  md:hidden mt-3 md:mt-20 rounded-md'>
        {/* <h2>Video first</h2> */}
    {
      places.map((dspot, videoIndex) => (
        dspot.name === individualSpot ? 
      <figure key={videoIndex}>
  <video autoPlay loop controls muted className='rounded-xl'>
    <source src={dspot.video} type="video/mp4"/>
    {/* Your browser does not support the video tag. */}
  </video>
  {/* <figcaption>Here is an example video</figcaption> */}
</figure>
        : null
      ))
    }
    </div>

      



        {/* Features with border lines */}

        <div  className='flex overflow-x-scroll text-lg font-medium scrollbar mt-3 mx-1 relative'>
    {
      places.map((dspot, index) => (

        dspot.name == individualSpot ? 
        <div key={index} className="border-y justify-center my-5 mx-4 border-solid flex border-slate-300">

        {dspot.features.map((feature, index) => <a className='mx-2 my-1 text-slate-400 hover:text-orange-600 text-sm' key={index} href={`#${feature.name}`} >{feature.name}</a>)}
          
      </div>
      : null
      
      )
      )
    }
    </div>

    {
  places.map((dspot, index) =>
    dspot.name === individualSpot ? 
      <div key={index} className='mx-5 px-5  mt-6'>
        <ul className='text-sm text-slate-500 mt-1'>
          <p className='font-semibold' >
           
          </p>

          {dspot.features.map((EachActivity, activityIndex) => (
            <li key={activityIndex} className='border-b mb-5'>
              <p className='font-semibold text-black' id={EachActivity.name}>{EachActivity.name}</p>
              <ul>
                {EachActivity.subFeatures.map((oneActivity, actIndex) => (
                  <li key={actIndex}>{oneActivity}</li>
                ))}
              </ul>
              <div className='flex justify-between '>
              <p className='text-sm text-black font-semibold mt-1'>Minimum Budget</p>
              <p className='outline outline-orange-600 text-orange-600 py-2 px-4 text-xs font-medium rounded mb-6'>
                
                {EachActivity.minimumBudget}
              </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
     : null
  )
}

        </div>

  



        {/* Right Hand Side {Map} */}
        <div className=' block md:grid md:col-span-4 mt-3 md:mt-20'>
        <div  className=' mx-6 mb-6  rounded-md px-4 md:px-6 pt-4 pb-2'>



          <div className=' md:px-6 md:py-5 rounded-md md:border'>



      {/* Video Desktop */}

      {/* <div className='mx-2 hidden  md:grid  mt-3 md:mt-20 rounded-md'> */}
        {/* <h2>Video first</h2> */}
    {
      places.map((dspot, videoIndex) => (
        dspot.name === individualSpot ? 
      <figure key={videoIndex} className='mb-10 hidden md:block'>
  <video autoPlay loop controls muted>
    <source src={dspot.video} type="video/mp4"/>
    {/* Your browser does not support the video tag. */}
  </video>
  {/* <figcaption>Here is an example video</figcaption> */}
</figure>
        : null
      ))
    }
    {/* </div> */}
          
          {/* About the Spot */}

        {
          places.map((dspot, spotindex) => (
            dspot.name === individualSpot ? 
            <div key={spotindex}> 
            <p className='text-base font-semibold mb-1'>About {dspot.name}</p>
            <p className='text-sm text-slate-600'> {dspot.description}</p>
            <p className=' hidden md:block text-orange-700 italic underline text-xs mt-2'><a href={`#${dspot.website}`}> Check their website</a></p>
            </div>
            : null
          ))
        }
        


          {/* Things to know */}

          {
          places.map((dspot, spotindex) => (
            dspot.name === individualSpot ? 
            <div key={spotindex} className=' mt-10'>
          <p className=' text-base font-medium'>Things to Know</p>
            <p className='text-sm text-slate-600 my-2 font-medium'>Available Time: <span className=' font-semibold blur-sm'> {dspot.openingTime}</span> - <span className=' font-semibold blur-sm'> {dspot.closingTime}</span></p>
            <p className='text-sm text-slate-600 my-2 font-medium'>Available Days: <span className=' font-semibold blur-sm'> {dspot.openingDays}</span> </p>
          </div> 
            : null
          ))
        }

         
          
          {/* Contact Details and Social Media Accounts */}

          {
          places.map((dspot, spotindex) => (
            dspot.name === individualSpot ? 

          <div key={spotindex} className='mt-10'>
          <p className=' text-base font-medium'>Contact Details</p>
          <p className='text-sm text-slate-600 my-2  blur-sm'>{dspot.phone}, <span>{dspot.email}</span></p>
          <p className='text-sm text-slate-600 my-2  blur-sm'>{dspot.address}</p>


          {/* Social Media Accounts */}
          <p className='text-sm text-slate-600 my-2'><a href={`#${dspot.socialMedia.facebook}`}><span><img src="../../assets/icons/Social-media-icons/facebook.png" alt="facebook icon" className='inline mr-4 w-5'/></span><span className='blur-sm'>{dspot.socialMedia.facebook}</span></a></p>
          <p className='text-sm text-slate-600 my-2'><a href={`#${dspot.socialMedia.instagram}`}><span><img src="../../assets/icons/Social-media-icons/instagram.png" alt="facebook icon" className='inline mr-4 w-5'/></span><span className='blur-sm'>{dspot.socialMedia.instagram}</span></a></p>
          <p className='text-sm text-slate-600 my-2'><a href={`#${dspot.socialMedia.twitter}`}><span><img src="../../assets/icons/Social-media-icons/twitter.png" alt="facebook icon" className='inline mr-4 w-5'/></span><span className='blur-sm'>{dspot.socialMedia.twitter}</span></a></p>
        
          </div> 
            : null
          ))
        }

          
          </div>
        </div>

      
    </div>
 
    </div>

        {/* Map Container */}

        {/* <LeafletMap/> */}


      {
        places.map((dspot, spotIndex) => (
          
          dspot.name === individualSpot ?
          
          <div id="map" key={spotIndex} > 
          <h2 className=' text-center text-xl py-8 font-semibold'>{dspot.name} is Here!</h2>
          <MapComponent key={spotIndex} spotAddress={dspot.address} spotName={dspot.name}/>
          </div>

          : null
        ))
      }




  </div>

   

  
)}

export default IndividualPageBody;