import React, {useState, useEffect} from 'react'
import { Carousel } from 'react-responsive-carousel';

function IndividualpageImageDisplay({individualSpot, loginAccount}) {
    const images = [
        { src: '../../assets/images/hero-carousel/hotels.jpg', alt: 'Image 1',  },
        { src: '../../assets/images/hero-carousel/drinks.jpg', alt: 'Image 2',  },
        { src: '../../assets/images/hero-carousel/art.jpg', alt: 'Image 3',  },
        // Add more image objects as needed
      ];

     

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
              "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      const [spotImages, setSpotImages] = useState([]);

       const [gridImage, setGridImage] = useState({image1:'', image2:'', video:''})

    // const mobileCarouselImages = [
    //   {src: '', alt: ''}
    // ]

    const [mobileCarouselImages, setMobileCarouselImages] = useState([{src: '', alt: ''}])


      useEffect (
        () => {
        
          setGridImage({
            ...gridImage, 
            image1: demoSpot.images1,
            image2: demoSpot.images2,
            video: demoSpot.video
          })

          // run a loop or find a way that stores the recieved data in to the state array
          setMobileCarouselImages({
            ...mobileCarouselImages , src :demoSpot.images1,
            alt:"Demo Image",
          })

        }, []
      )

      // Handle file selection from input tag
      const handleFileChange = (event) => {
        const files = event.target.files;
        setSpotImages([...spotImages, ...files]);
      };


      // Handle image upload for all selected files
      const handleImageUpload = () => {
        if (spotImages.length === 0) {
          console.error('No files selected');
          return;
        }

        const formData = new FormData();

        // Append each selected file to the FormData object
        spotImages.forEach((file, index) => {
          formData.append(`image${index}`, file);
        });

        // Replace 'YOUR_UPLOAD_API_URL' with the actual API endpoint for image upload
        axios.post('YOUR_UPLOAD_API_URL', formData)
          .then((response) => {
            // Handle the response from the server if needed
            setSpot(response.data);

            // console.log('Images uploaded successfully:', response.data);
          })
          .catch((error) => {
            // Handle error if the upload fails
            console.error('Image upload failed:', error);
          });
      };


      const [spot, setSpot] = useState({name: '', description: '', website: '', openingTime: '', category: '', phoneNumber: '', email: '', address:'', facebookHandle: '', instagramHandle: '', twitterHandle: '', features: [], images: ['image1', 'image2', 'image3', 'image4'] })


      //For getting Spot data
    // useEffect(() => {
    //   axios.get('API URL').then((resp) => {
    //     setSpot({ ...spot, name:resp.data.name, description:resp.data.description, website:resp.data.website, category: resp.data.category, openingTime:resp.data.openingTime, phoneNumber:resp.data.phoneNumber, email:resp.data.email, address:resp.data.address, facebookHandle:resp.data.facebookHandle, instagramHandle:resp.data.instagramHandle, twitterHandle:resp.data.twitterHandle, features:resp.data.features})
    //   }).catch(err => {
    //     console.trace(err);
    //   })
    // }, [])



    const fillImages = () => {
      spot.images.map((eachImage, imageIndex) => {
        images.push(eachImage);
      })
    }

    useEffect(()=> {
      fillImages()
    }, [images])

    

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
      
      
      const nigeriaStates = [
        "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
        "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe",
        "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
        "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
        "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
      ]

  return (
    <div>
        <div className='-z-30'>

      {/* Desktop View */}
        <div className="absolute box-border sm:top-40 md:top-36 left-6 w-full h-full items-center justify-start hidden sm:flex -z-50">

        {/* Tittle and Location */}

        {
          places.map((dspot, spotIndex) => (

            dspot.name === individualSpot ? 
          

        <div key={spotIndex} className='hidden box-border md:block ml-4'>
          <button className=' text-white bg-orange-600 py-1 px-3 rounded font-medium rounded-bl-none text-xs m-1'>#{dspot.category}</button>
          <button className=' text-white  py-1 px-3  font-medium  text-xs m-1'>{nigeriaStates.includes(getLastWord(dspot.address)) ? <span className='bg-orange-600 py-1 px-3 rounded rounded-bl-none'>#{getLastWord(dspot.address)}</span> : null}</button>
        <p className=' sm:text-4xl md:text-5xl text-white font-bold'>{dspot.name}</p>
        <p className=' hidden sm:block text-white sm:text-xs md:text-sm'>{dspot.address}</p>
        <div className='flex'>
        <p className=' hidden sm:block text-slate-300 italic underline mr-3 text-xs'><a href="#map"> Show Me Directions</a></p> {/*Takes you to the map */}
        <p className=' hidden sm:flex text-slate-300 italic underline text-xs'><a href={dspot.website}> Check their website</a></p> {/*Takes you to the website */}
        </div>
         </div>

            : null
        ))

        }

        </div>
      

          {/* Image Mixed Grid */}
              {/* Overlay */}
              {/* <div className="overlay "></div> */}

              {
  places.map((dspot, spotIndex) => (
    dspot.name === individualSpot ? (
      <div key={spotIndex} className="hidden md:grid box-border grid-rows-1 sm:grid-rows-2 grid-flow-col gap-x-1 m-1">
        <div className="col-span-2 -z-50 sm:row-span-3">
          <div className="image-container">
            <img src={dspot.images[0]} alt="Big Image" className="w-full rounded-md md:rounded-l-md md:rounded-r-none left-image" />
          </div>
        </div>
        <div className="hidden md:block md:col-span-2">
          <img src={dspot.images[1]} alt="Small Image 1" className="w-full rounded-r-md right-image" />
        </div>
        <div className="hidden md:block md:col-span-1">
          <img src={dspot.images[2]} alt="Small Image 2" className="w-full rounded-r-md right-image" />
        </div>
      </div>
    ) : null
  ))
}


            


         {/* MobileView */}

        {/* Image Carousel */}
{

  places.map((individualdspot, dspotIndex) => (

    individualdspot.name === individualSpot ? 

    <Carousel 
    key={dspotIndex}
        // selectedItem={currentIndex}
        autoPlay={true}
        infiniteLoop
        showStatus={true}
        showThumbs={false}
        showIndicators={false}
        interval={3000}
        className='carousel block md:hidden' 
        // Change the interval duration as needed
      >
          {
            individualdspot.images.map((eachImage, eachImageIndex) => (
              <div key={eachImageIndex} className='slide'>

            <img src={eachImage} alt={individualdspot.name} className='background-image' />
              
          </div>
            ))
          }
        
      </Carousel>

    : null

  
))}

      


         </div>
    </div>
  )
}

export default IndividualpageImageDisplay