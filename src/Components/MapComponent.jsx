import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import  { Icon } from "leaflet"; 

const MapComponent = ({spotAddress, spotName}) => {
  console.log("Rendering MapComponent");

const demoCoords = [6.5765376, 3.3488896]

    // States
const [myCurrentLocationCoords, setMyCurrentLocationCoords] = useState([6.5765376, 3.3488896]);
const [spotCoordinates, setspotCoordinates] = useState([6.5765376, 3.3488896]);

console.log('initial', typeof myCurrentLocationCoords)


// Getting coordinates
useEffect (() => {
    
    if ("geolocation" in navigator) {
        // Get the current position
        navigator.geolocation.getCurrentPosition(function(position) {
        //   const latitude = position.coords.latitude;
        //   const longitude = position.coords.longitude;
          const newCoords = [position.coords.latitude, position.coords.longitude]
          
      
          // Do something with the latitude and longitude values
        //   console.log("Latitude: " + latitude + ", Longitude: " + longitude);
      
      //push the Coordinates to the state for it
            // setMyCurrentLocationCoords(newCoords)
            console.log("Updated coordinates:", typeof newCoords);
      
        });
      } else {
        console.log("Geolocation is not available.");
      }


      console.log(`Demospot: ${demoCoords} and data type: ${typeof demoCoords}`)


      //  // Use geocoding API to fetch coordinates from an address
      //   const fetchCoordinatesFromAddress = async () => {
      //     try {
      //       const response = await axios.get(
      //         `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(spotAddress)}&key=YOUR_API_KEY`
      //       );

      //       const location = response.data.results[0].geometry.location;
      //       const newCoords = [location.lat, location.lng];
      //       setspotCoordinates(newCoords);
      //       console.log("Fetched coordinates from address:", newCoords);
      //     } catch (error) {
      //       console.error("Error fetching coordinates:", error);
      //     }
      //   };

        // Call the function to fetch coordinates from the address
        // fetchCoordinatesFromAddress();
      }, [spotAddress]);





// console.log(myCurrentLocationCoords)
// console.log(demoCoords)


// Objects
// const spotIcon = new Icon ({
//     iconUrl: "./assets/icons/home-marker.png",
//     iconSize: [38, 38]
// });



// Extras
// For multiple markers
//  const markers = [
//    {
//      geocode: myCurrentLocationCoords,
//      popup: 'Where you are',
//      spotIcon: new Icon ({
//       iconUrl: "./assets/icons/home-marker.png",
//       iconSize: [38, 38]
//       }),
//    }, 
     
//    {
//      geocode: spotCoordinates,
//      popup: `${spot.Name}`,
//      spotIcon: new Icon ({
//       iconUrl: "./assets/icons/spot-marker.png",
//       iconSize: [38, 38]
//       }),
//    }, 
     
// ]


// Trash

//use the navigation to extra coordinates from the said address

    console.log("Current location coords:", myCurrentLocationCoords);

      console.log(typeof myCurrentLocationCoords)
      
  return (
  
    <div className="w-full h-96 bg-gray-200">
      {/* Leaflet map initialization */}
      <div id="mapContainer" className="w-full h-full">
      <h4 className='text-center'> The coordinates are: {`${myCurrentLocationCoords[0]}, ${myCurrentLocationCoords[1]}`}</h4>
      <MapContainer center={myCurrentLocationCoords} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />


    <Marker position={myCurrentLocationCoords}>
      <Popup>
        <span className=' text-base font-medium'>{spotName}</span> <br /> {spotAddress}
      </Popup>
    </Marker>

 

    {/* {markers.map(marker => ( 
    <Marker position={marker.geocode} icon={spotIcon}>
    </Marker>
    ))
    } */}

  </MapContainer>
  
</div>
    </div>

  );
};

export default MapComponent;