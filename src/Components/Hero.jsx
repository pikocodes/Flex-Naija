import React, {useState, useEffect, useRef} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const images = [
  'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/9335987/pexels-photo-9335987.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://img.freepik.com/free-photo/romantic-brunette-woman-pink-glasses-drinking-cocktail-during-photoshoot-with-friends-fascinating-ladies-spending-weekend-pool_197531-20895.jpg?size=626&ext=jpg&ga=GA1.1.602844675.1677600153&semt=ais',
  'https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg?auto=compress&cs=tinysrgb&w=800',
  // Add more image URLs as needed
];
const imagesNew = [
  'https://images.pexels.com/photos/7148664/pexels-photo-7148664.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/4057701/pexels-photo-4057701.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://img.freepik.com/free-photo/friends-having-party-celebration-pool_23-2149215991.jpg?w=740&t=st=1700139205~exp=1700139805~hmac=6f4c53b392a99a5458b3d3aca8a7344f44b51912cb591daf875176f990bd11d8',
  'https://images.pexels.com/photos/6224736/pexels-photo-6224736.jpeg?auto=compress&cs=tinysrgb&w=800',
  // Add more image URLs as needed
];


const Hero = () => {

  const inputRef = useRef();

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

    const [search, setSearch] = useState('');

    const handleSearch = () => {
        search === '' ? inputRef.current.focus() : alert(search);

    }

    const handleButtonClick = () => {
      setSearch(inputRef.current.value);
  }




  return (
    <div className="hero-home ">
       
      
       <div className="absolute top-0 left-0 w-full h-full items-center justify-center hidden sm:flex search-bar ">

         {/* Hero Text */}
        <div>
          <p className=' text-center text-5xl pb-1 hidden sm:block text-white font-bold
          '>Discover and Explore More Fun</p>
          <p className='text-center text-sm pb-8 hidden sm:block text-slate-300 font-normal italic'>Groovy, Relaxing, and Adverturious Spots to check out in Nigeria, Are You Ready??</p>
          
          {/* Search Bar */}
        <div className=" text-base z-50 bg-white py-2 rounded px-2">
          <input
            type="text"
            value={search}
            ref={inputRef}
            placeholder='Search for a Spot'
            onChange={e => setSearch(e.target.value)}
            // onFocus={handleButtonClick}
            className="text-black pl-3 rounded py-3 z-50 bg-white search-area input-field"/>
          
          <button
            className="px-3 py-3 ml-2 button bg-orange-600 rounded text-white hover:bg-orange-700 z-50"
            onClick={handleSearch}
            >
            Search Spot
          </button>
        </div>
            </div>
      </div>
      
      <div className=" hidden sm:block  overlay-home"></div>
      
      {/* Image Carousel */}
      <Carousel 
        // selectedItem={currentIndex}
        autoPlay={true}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={4000}
        className='home-container pb-0 mb-0 hidden sm:block' 
        // Change the interval duration as needed
      >


        {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} className='background-image' />
          
        ))}
      </Carousel>
      <Carousel 
        // selectedItem={currentIndex}
        autoPlay={true}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={4000}
        className='home-container pb-0 mb-0 block sm:hidden' 
        // Change the interval duration as needed
      >


        {imagesNew.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} className='background-image' />
          
        ))}
      </Carousel>

    </div>
  );
};

export default Hero;
