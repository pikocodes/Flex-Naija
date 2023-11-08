import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function VendorsActivityComp({linkLabel, linkToPrevPage, linkDirection, title}) {


  

  
  const [spotFeatures, setSpotFeatures] = useState([
    { name: '', minimumBudget: '', activities: [] }
  ]);


  //To know which feature is selected
   const [selectedFeature, setSelectedFeature] = useState('');



  // const addSpotFeature = () => {
  //   setSpotFeatures([...spotFeatures, { name: '', minimumBudget: '', activities: [] }]);
  // };
  

  //Setting the spot feature's name to the array of features assigned in the first vendor details form
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



  const handleFeatureChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFeature(selectedValue);

    demoFeatures.map((demoFeature) => ({
      name: demoFeature,
      minimumBudget: '',
      activities: []
    }));
  };


  // const updateFeatureMinimumBudget = () => {
  //   spotFeatures.map(feature => {
  //     if(feature.name == selectedFeature) {

  //       //update/add the minimun budget
  //       setSpotFeatures([...spotFeatures, {minimumBudget: spotFeatures.minimumBudget}])
  //     }
  //   })
  // }



  //option 1
  const updateFeatureMinimumBudget = (e) => {
    const updatedSpotFeatures = spotFeatures.map((feature) => {
      if (feature.name === selectedFeature) {
        // Update the minimumBudget property for the matching feature
        return { ...feature, minimumBudget: e.target.value };
      }
      return feature; // Return unchanged feature for other elements
    });
  
    setSpotFeatures(updatedSpotFeatures);
  };
  




  //option 2
  const updateFeatureActivities = (e) => {
    const updatedSpotFeatures = spotFeatures.map((feature) => {
      if (feature.name === selectedFeature) {
        // Update the activities property for the matching feature
        return { ...feature, activities: e.target.value.split(', ') }; // Assuming the activities are comma-separated
      }
      return feature; // Return unchanged feature for other elements
    });
  
    setSpotFeatures(updatedSpotFeatures);
  };

  

  const demoFeatures = ['Wine', 'Games', 'Cocktails', 'Karoake', 'Food'];
  useEffect(() => {
    // Create a new array with the updated features
    const newSpotFeatures = demoFeatures.map((demoFeature) => ({
      name: demoFeature,
      minimumBudget: '',
      activities: []
    }));

    // Set the new state with all the new feature objects
    setSpotFeatures(newSpotFeatures);
  }, []);

  

  //Submit information to Web Server through API and proceed to next page
  const handleSubmit = (e) => {
    e.preventDefault();

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

    // Pass the button as a prop to the new component

    linkDirection();
  };
  


  return (
    <div className=' mx-auto w-full md:w-4/5 '  >
      <form onSubmit={handleSubmit} className=' bg-white  my-10 mx-auto  rounded-lg' >
       <p className=' text-center text-2xl text-orange-600 py-1'>{title}</p>
       <p className='text-center w-4/5 sm:w-3/5 md:w-3/5 mx-auto  text-xs italic text-slate-500 pb-3'>Here You will state the Minimum Budget for each of the Features you listed in the previous form and also the activities under each of them</p>
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

      {/* Change the state to the one containing the API data {spotFeatures, feature.name} */}
      {demoFeatures.map((feature, index) => (
        <option key={index} className='' value={feature}>
          {feature}
        </option>
      ))}
    </select>

        {/* Minimum budget */}
        <input type="text"  placeholder={`Minimum Budget for ${selectedFeature}`} value={spotFeatures.minimumBudget} onChange={updateFeatureMinimumBudget} className=' mt-3 text-sm border-b border-slate-200 grid w-4/5 sm:w-3/5 md:w-3/5 mx-auto col-span-1  p-2 md:ml-3'/>
        </div>

        {/* List of Activities */}
        <div className="grid w-4/5 sm:w-3/5 md:w-3/5 mx-auto md:grid-cols-1 mt-8">
          <input type="text" placeholder={`List of Activities under ${selectedFeature} feature [Activity-1, Activity-2]`} onChange={updateFeatureActivities} className=' text-sm border-b border-slate-200 p-2'/>
        </div>
        


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

export default VendorsActivityComp