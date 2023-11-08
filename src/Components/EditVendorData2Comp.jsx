import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useSpotContext } from './SpotContext';

function EditVendorData2Comp({linkLabel, linkToPrevPage, linkDirection, title, verifyVendorAccount}) {

  const { setSelectedSpot } = useSpotContext();

  // Creating state hooks
  const [spotFeatures, setSpotFeatures] = useState([
    { name: '', minimumBudget: '', activities: [] }
  ]);
  const [onDisplayFeature, setOnDisplayFeature] = useState({name: '', minimumBudget: '', activities: []})

   const [selectedFeature, setSelectedFeature] = useState('');

// console.log(`The data type of ondisplay: ${onDisplayFeature.activities}`);
   
  //  Demos to be replaced by data from axios calls
   const demoFullFeatures = [
    {
    name: 'Wine',
    minimumBudget: 'N4000',
    activities: ["Chardonnay",
    "Merlot",
    "Cabernet Sauvignon",
    "Pinot Noir",
    "Sauvignon Blanc",
    "Zinfandel",
    "Syrah",
    "Malbec",
    "Riesling",
    "Grenache"]
  },
    {
    name: 'Games',
    minimumBudget: 'Buy Drink',
    activities: ["Monopoly",
    "Chess",
    "Scrabble",
    "Catan",
    "Uno",
    "Jenga",
    "Twister",
    "Risk",
    "Pictionary",
    "Trivial Pursuit"]
  },
    {
    name: 'Cocktails',
    minimumBudget: 'N3000',
    activities: ["Margarita",
    "Cosmopolitan",
    "Martini",
    "Mojito",
    "Piña Colada",
    "Old Fashioned",
    "Negroni",
    "Bloody Mary",
    "Mai Tai",
    "Daiquiri"]
  },
    {
    name: 'Karoake',
    minimumBudget: 'Buy Drink',
    activities: ["Bohemian Rhapsody",
    "Sweet Caroline",
    "Don't Stop Believin'",
    "Livin' on a Prayer",
    "Wonderwall",
    "Billie Jean",
    "Hey Jude",
    "I Will Always Love You",
    "My Heart Will Go On",
    "I Want to Dance With Somebody"]
  },
    {
    name: 'Food',
    minimumBudget: 'N2000',
    activities: ["Pizza",
    "Burger",
    "Taco",
    "Sushi",
    "Pasta",
    "Salad",
    "Steak",
    "Fried Chicken",
    "Ice Cream",
    "Chocolate Cake"]
  },
    
    ];



  // Initialization (FETCH DATA AND FILL UP THE SPOTS FEATURE)

    //1. As the page loads, it recieves the data (features et activities) from the registered account and stores it in the main features state actively read and displayed by the Page

  useEffect(() => {

    // Replace demoFeatures with the axios call

    // Create a new array with the updated features
    const newSpotFeatures = demoFullFeatures.map((demoFeature) => ({...demoFeature,
      name: demoFeature.name,
      minimumBudget: demoFeature.minimumBudget,
      activities: demoFeature.activities,
    }));

    // Set the new state with all the new feature objects
    setSpotFeatures(newSpotFeatures);
  }, []);



  // Handling Functions from Events
  const handleFeatureChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFeature(selectedValue);
  
    const updatedFeature = spotFeatures.find((demoFeature) => {
      return demoFeature.name === selectedValue;
    });
  
    if (updatedFeature !== undefined) {
      
      // console.log( ...updatedFeature.activities)
      setOnDisplayFeature(updatedFeature)
  

    }
  
  };

  const updateFeatureMinimumBudget = (e) => {
    // e.preventDefault();

    //save the event
    const newMiniBudget = e.target.value;
    // console.log(newMiniBudget)

  // update the library
    const updatedMiniBudget = spotFeatures.map((feature) => {
      if (feature.name === selectedFeature) {
        // Update the minimumBudget property for the matching feature
        return { ...feature, minimumBudget: e.target.value };
      }
      return feature; // Return unchanged feature for other elements
    });

    // Update displayed information
    setOnDisplayFeature(updatedMiniBudget)
    // console.log(updatedMiniBudget)
  
    setSpotFeatures(updatedMiniBudget);
}

  const updateFeatureActivities = (e) => {
    const updatedSpotFeatures = spotFeatures.map((feature) => {
      if (feature.name === selectedFeature) {
        // Update the activities property for the matching feature
        return { ...feature, activities: e.target.value.split(', ') }; 
        // setOnDisplayFeature(prevState => ({
        //   ...prevState,
        //   activities: [...prevState.activities, e.target.value]
        // }));
        
      }
      return feature; // Return unchanged feature for other elements
    });

    setSpotFeatures(updatedSpotFeatures);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Submit information to Web Server through API and proceed to next page

    // Push the received data to the server
    const fetchData = async () => {
      try {
        const response = await axios.post('API URL', { spotFeatures });
        // Handle the response here (e.g., update state)

      } catch (error) {
        // Handle the error here (e.g., show an error message)
        console.error('Error fetching data:', error.message);
      }
    };
    
    fetchData();

    // Passing the vendor's account in order to target the vendor page correctly at authentication
    setSelectedSpot(verifyVendorAccount)

    // Pass the button as a prop to the new component

    linkDirection();
  };

  //Debugging
  // console.log(onDisplayFeature)
  // console.log(spotFeatures)


  // Helper Functions
  const addSpace = (value) => {
    return value.map(activity => activity.replace(/,/g, ', '));
  }




// Trash for Now

  // const addSpotFeature = () => {
  //   setSpotFeatures([...spotFeatures, { name: '', minimumBudget: '', activities: [] }]);
  // };

  // Setting the spot feature's name to the array of features assigned in the first vendor details form
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('your-api-endpoint');
  //       const featuresArray = response.data.features; //result is the features array 

  //       // The response data has an array of features that will work as names for the spot features state
  //       const spotFeaturesNames = featuresArray.map(name => ({ name, minimumBudget: '', activities: [] }));

  //       setSpotFeatures(spotFeaturesNames);
  //     } catch (error) {
  //       console.error('Error fetching spot features:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  console.log(`The Data type of Activities on display: ${typeof onDisplayFeature.activities} `)



  return (
    <div className=' mx-auto w-full md:w-4/5 '  >
      <form onSubmit={handleSubmit} className=' bg-white  my-10 mx-auto  rounded-lg' >
       <p className=' text-center text-2xl text-orange-600 py-1'>{title}</p>
       <p className='text-center w-4/5 sm:w-3/5 md:w-3/5 mx-auto  text-xs italic text-slate-500 pb-3'>Here You will update the Minimum Budget for each of the Features you listed in the previous form and also the activities under each of them</p>
       <div className='block md:grid grid-cols-2'>

         {/* First Line */}
        {/* Dropdown list for Features Name */}
        <select
      name="category"
      id=""
      className="mt-3 text-sm border-b border-slate-200 grid w-4/5 sm:w-3/5 md:w-3/5 mx-auto col-span-1 p-2 md:mr-3"
      value={selectedFeature}
      onChange={handleFeatureChange}
    >


      {spotFeatures.map((feature, index) => (
        <option key={index} className='' value={feature.name}>
          {feature.name}
        </option>
      ))}
    </select>

        {/* Minimum budget */}
        <input type="text"  placeholder={`Minimum Budget for ${selectedFeature}`} value={onDisplayFeature.minimumBudget} onChange={updateFeatureMinimumBudget} className=' mt-3 text-sm border-b border-slate-200 grid w-4/5 sm:w-3/5 md:w-3/5 mx-auto col-span-1  p-2 md:ml-3'/>
        </div>

        {/* List of Activities */}
        <div className="grid w-4/5 sm:w-3/5 md:w-3/5 mx-auto md:grid-cols-1 mt-8">
          <input type="text" placeholder={`List of Activities under ${selectedFeature} feature [Activity-1, Activity-2]`} value={addSpace(onDisplayFeature.activities).join(', ')} onChange={updateFeatureActivities} className=' text-sm border-b border-slate-200 p-2'/>
        </div>
        

        {/* Last Buttons */}
        <div className=' mt-4 mb-8 w-4/5 sm:w-3/5 md:w-3/5 mx-auto '>
        {/* Next Button */}
     <button className=' bg-orange-600 hover:bg-orange-700 px-12  float-right py-2 text-xs text-center text-white rounded-full'>{linkLabel}</button>

          {/* Back to Home */}
          <Link to={`${linkToPrevPage}`}><button className=' bg-orange-600 hover:bg-orange-700 text-white text-xs py-2 float-left px-12 rounded-full'>Back</button></Link>
      </div>

      </form>
    </div>
  )
}

export default EditVendorData2Comp