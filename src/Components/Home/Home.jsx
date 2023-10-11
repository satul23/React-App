import React,{useEffect} from 'react';
import './home.css';
import video from '../../Assests/video3.mp4';
import {BsFillGeoAltFill} from 'react-icons/bs';
import {HiFilter} from 'react-icons/hi';

import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';

const Home = () => {
  
  useEffect(() =>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className='homeContent container'>
        <div className='textDiv'>
           <span data-aos="fade-up" className='smallText'>
            OUR PAKAGES
           </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search Your Holidays
            </h1> 
          </div>
          
          <div data-aos="fade-up" className='cardDiv grid'>
          <div className='destinationInput'>
            <label htmlFor="city"> Search your 
            destination:</label>
            <div className='input flex'>
              <input type="text"
              placeholder='Enter your destination...' />
              <BsFillGeoAltFill className='icon'/>
            </div>
          </div>
          <div className='dateInput'>
            <label htmlFor="date"> Select your 
            date:</label>
            <div className='input flex'>
              <input type="date"
              />
              
            </div>
          </div>
          <div className='priceInput'>
            <div className='label_total flex'>
            <label htmlFor="price"> Max Price:</label>
            <h3 className="total">$5000</h3>
            </div>
            <div className='input flex'>
              <input type="range"
              max="$5000" />
              
            </div>
          </div>

          <div className='searchOptions flex'>
             <HiFilter className="icon"/>
             <span>MORE FILTERS</span>
           </div>
       </div>
     </div>
        

    </section>
  )
}

export default Home;
