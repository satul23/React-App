import React,{useEffect} from 'react';
import './main.css';
import { Data } from './Data';
import {CiLocationOn} from 'react-icons/ci';
import {BsFillBookmarkCheckFill} from 'react-icons/bs'

import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';

const Main = () => {

  useEffect(() =>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className='main container section'>
       <div  className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Visited Destinations
        </h3>
       </div> 

        <div data-aos="fade-up" className="secContent grid">
          {
            Data.map((Data) =>{
              return(
                <div data-aos="fade-up" key={Data.id} 
                 className='singleDestination'>
                <div className='imageDiv'>
                  <img src={Data.imgSrc} alt={Data.destTitle} />
                </div>
             
              <div className='cardInfo'>
                <h4 className='destTitle'>
                  {Data.destTitle}</h4>
                  <span className='continent flex'>
                     <CiLocationOn className='icon'/>
                     <span className="name">{Data.location}</span>
                  </span>
              
                   <div className="fees flex">
                     <div className="grade">
                      <span>{Data.grade}<small>+1</small></span>
                     </div>
                     <div className="price">
                      <h5>{Data.fees}</h5>
                     </div>
                   </div>
                   <div className="desc">
                    <p>{Data.description}</p>
                   </div>
                   <button className='btn flex'>
                     DETAILS <BsFillBookmarkCheckFill className='icon'/> 
                   </button>
                </div>
                </div>
              )
            })
          }

        </div>
    </section>
  )
}

export default Main;
