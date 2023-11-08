import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useSpotContext } from './SpotContext';
import { useAccountContext } from './AccountHolder';
import Card from './Card';


function NewSpots({loginAccount}) {

    const newSpotsDataBase = [

        {
            images : '../../assets/images/chicken.jpg', 
            titles: 'Lavin Place',
            descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sit assumenda cumque delectus illo quibusdam veniam eligendi blanditiis. Nobis ab id, hic vero fuga quos',
            location: 'Gwaripa, Abuja',
            feature: 'Restuarant'
        }, 
    {
        images : '../../assets/images/cold-cocktails-different-colors-table.jpg',
        titles: 'Vistro Lounge',
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sit assumenda cumque delectus illo quibusdam veniam eligendi blanditiis. Nobis ab id, hic vero fuga quos',
        location: 'Wuse, Abuja',
        feature: 'Bar'
    },
        {
            images : '../../assets/images/chicken.jpg',
            titles: 'Lavin Place',
            descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sit assumenda cumque delectus illo quibusdam veniam eligendi blanditiis. Nobis ab id, hic vero fuga quos',
            location: 'Gwaripa, Abuja',
            feature: 'Restuarant'
        }, 
    {
        images : '../../assets/images/cold-cocktails-different-colors-table.jpg',
        titles: 'Vistro Lounge',
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sit assumenda cumque delectus illo quibusdam veniam eligendi blanditiis. Nobis ab id, hic vero fuga quos',
        location: 'Wuse, Abuja',
        feature: 'Lounge'
    },
        
    {
        images : '../../assets/images/cold-cocktails-different-colors-table.jpg',
        titles: 'Vistro Lounge',
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sit assumenda cumque delectus illo quibusdam veniam eligendi blanditiis. Nobis ab id, hic vero fuga quos',
        location: 'Wuse, Abuja',
        feature: 'Bar'
    },
        {
            images : '../../assets/images/chicken.jpg',
            titles: 'Lavin Place',
            descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sit assumenda cumque delectus illo quibusdam veniam eligendi blanditiis. Nobis ab id, hic vero fuga quos',
            location: 'Gwaripa, Abuja',
            feature: 'Lounge'
        }, 
    {
        images : '../../assets/images/cold-cocktails-different-colors-table.jpg',
        titles: 'Vistro Lounge',
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sit assumenda cumque delectus illo quibusdam veniam eligendi blanditiis. Nobis ab id, hic vero fuga quos',
        location: 'Wuse, Abuja',
        feature: 'Restuarant'
    },
        {
            images : '../../assets/images/chicken.jpg',
            titles: 'Lavin Place',
            descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sit assumenda cumque delectus illo quibusdam veniam eligendi blanditiis. Nobis ab id, hic vero fuga quos',
            location: 'Gwaripa, Abuja',
            feature: 'Lounge'
        }, 
    {
        images : '../../assets/images/cold-cocktails-different-colors-table.jpg',
        titles: 'Vistro Lounge',
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sit assumenda cumque delectus illo quibusdam veniam eligendi blanditiis. Nobis ab id, hic vero fuga quos',
        location: 'Wuse, Abuja',
        feature: 'Resort'
    },
]
    const [newSpots, setNewSpots] = useState([]);

    const { setSelectedSpot } = useSpotContext();
    const {setAccountHolder} = useAccountContext();

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
              "https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&w=800",
            ],
          },
          {
            "name": "Luxe Lounge",
            "category": "Lounge",
            "address": "789 Opulence Street, Lagos, Nigeria",
            "description": "A high-end lounge offering a sophisticated atmosphere, signature cocktails, and live entertainment.",
            "website": "https://www.luxelounge.ng",
            "openingTime": "6:00 PM",
            "closingTime": "2:00 AM",
            "openingDays": "Thursday-Saturday",
            "phone": "+234-987-654-3210",
            "images": [
              "https://images.pexels.com/photos/6174144/pexels-photo-6174144.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/5662826/pexels-photo-5662826.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/3566120/pexels-photo-3566120.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1484514/pexels-photo-1484514.jpeg?auto=compress&cs=tinysrgb&w=800",
            ],
            "video": "https://player.vimeo.com/external/490365542.sd.mp4?s=c6085407ae0a6f3b295b162b24806da3378c268d&profile_id=164&oauth2_token_id=57447761",
            "email": "info@luxelounge.ng",
            "socialMedia": {
              "facebook": "@LuxeLounge",
              "instagram": "@LuxeLoungeNG",
              "twitter": "@LuxeLoungeNaija"
            },
            "features": [
              {
                "name": "Signature Cocktails",
                "subFeatures": [
                  "Classic Cocktails",
                  "Mixologist Specials",
                  "Mocktails",
                  "Exclusive Luxe Creations",
                  "Happy Hour Deals"
                ]
              },
              {
                "name": "Live Entertainment",
                "subFeatures": [
                  "Live Bands",
                  "DJ Sets",
                  "Jazz Nights",
                  "Acoustic Performances",
                  "Dance Performances"
                ]
              },
              {
                "name": "VIP Seating",
                "subFeatures": [
                  "Exclusive VIP Lounge",
                  "Private Cabanas",
                  "Bottle Service",
                  "Premium Cigar Lounge",
                  "Reserved Tables"
                ]
              },
              {
                "name": "Theme Nights",
                "subFeatures": [
                  "80s Retro Night",
                  "Latin Dance Night",
                  "Casino Royale Night",
                  "Masquerade Ball",
                  "Hawaiian Luau Night"
                ]
              },
              {
                "name": "Late-Night Dining",
                "subFeatures": [
                  "Gourmet Appetizers",
                  "Midnight Snacks",
                  "Charcuterie Boards",
                  "Dessert Platters",
                  "24/7 Pizza Delivery"
                ]
              },
              {
                "name": "Events and Parties",
                "subFeatures": [
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
            "name": "Sunrise Suites",
            "category": "Hotel",
            "address": "101 Vacation Lane, Port Harcourt, Nigeria",
            "description": "A luxurious hotel offering stunning views, comfortable rooms, and exceptional hospitality.",
            "website": "https://www.sunrisesuites.ng",
            "openingTime": "24/7",
            "closingTime": "24/7",
            "openingDays": "Open every day",
            "phone": "+234-111-222-3333",
            "images": [
              "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800"
            ],
            "video": "https://player.vimeo.com/external/371845943.sd.mp4?s=9f9a9acf4ca8cca89f12a5558b36ce2dcda1e0de&profile_id=164&oauth2_token_id=57447761",
            "email": "reservations@sunrisesuites.ng",
            "socialMedia": {
              "facebook": "@SunriseSuitesPH",
              "instagram": "@SunriseSuitesPH",
              "twitter": "@SunrisePH"
            },
            "features": [
              {
                "name": "Luxury Accommodations",
                "subFeatures": [
                  "Deluxe Rooms",
                  "Suites",
                  "Presidential Suites",
                  "Ocean View Rooms",
                  "Jacuzzi Suites"
                ]
              },
              {
                "name": "Dining Options",
                "subFeatures": [
                  "Fine Dining Restaurant",
                  "24/7 Room Service",
                  "Buffet Breakfast",
                  "Poolside Bar",
                  "In-room Dining"
                ]
              },
              {
                "name": "Wellness Facilities",
                "subFeatures": [
                  "Spa and Massage Services",
                  "Fitness Center",
                  "Swimming Pool",
                  "Sauna and Steam Room",
                  "Yoga Classes"
                ]
              },
              {
                "name": "Event Spaces",
                "subFeatures": [
                  "Conference Rooms",
                  "Banquet Halls",
                  "Wedding Venues",
                  "Business Meeting Rooms",
                  "Outdoor Event Spaces"
                ]
              },
              {
                "name": "Concierge Services",
                "subFeatures": [
                  "Airport Transfers",
                  "Tour and Excursion Bookings",
                  "Car Rental",
                  "Personalized Assistance",
                  "Luggage Storage"
                ]
              },
              {
                "name": "24/7 Customer Support",
                "subFeatures": [
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
                "https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/16134464/pexels-photo-16134464/free-photo-of-a-woman-on-a-massage-table.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/3738348/pexels-photo-3738348.jpeg?auto=compress&cs=tinysrgb&w=800",
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

    //switch the 'newSpotsDataBase' to 'newSpots' recieve data from server
    // useEffect(
    //     axios.get('URL Link')
    //     .then(resp => {
    //         setNewSpots(resp.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // )



  return (
    <div className=' mt-20'>
        <div className=''>
        <h2 className=' text-2xl text-center ml-6 mt-10 md:text-3xl font-semibold'>New Spots</h2>
        <p className='mx-6 text-slate-400 text-center text-sm font-light mt-1 mb-6 sm:mb-14'>Discover Fresh Destinations Within Your State!</p>
        </div>



        {/* Alternative cards */}
        <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Add multiple Card components as needed */}

        {places.map((newSpot, index) => (
        <Link to={`/Spots`} key={index} onClick={() => {setSelectedSpot(newSpot.name), setAccountHolder(loginAccount)}}><Card src={newSpot.images[1]} alt={newSpot.name} title={newSpot.name} address={newSpot.address} feature={newSpot.category} /></Link>
        ))} 
      </div>
    </div>


    </div>
  )
}

export default NewSpots