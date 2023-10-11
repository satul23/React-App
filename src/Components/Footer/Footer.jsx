import React,{useEffect} from 'react';
import './footer.css';
import video2 from '../../Assests/video4.mp4';
import {AiOutlineSend} from 'react-icons/ai';
import video from '../../Assests/video3.mp4';
import {SiYourtraveldottv } from 'react-icons/si';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {BsChevronRight} from 'react-icons/bs';

import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';

const Footer = () => {

  useEffect(() =>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className='footer'>
      <div className='videoDiv '>
      <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
           <small>KEEP IN TOUCH</small>
           <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND <AiOutlineSend className='icon'/>
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
              <SiYourtraveldottv className='icon'/>
              Roam.
              </a>
            </div>
            <div data-aos="fade-up" 
                 data-aos-duration="4000"
            className="footerSocials flex">
            <AiFillLinkedin className="icon"/>
             <AiFillGithub className="icon"/>
            </div>
          </div> 

          <div className="footerLinks grid">
            <div data-aos="fade-up" className="linkGroup">
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className='footerList flex'>
                <BsChevronRight className="icon"/>
                Services
              </li>
              <li className='footerList flex'>
                <BsChevronRight className="icon"/>
                Insurance
              </li>
              <li className='footerList flex'>
                <BsChevronRight className="icon"/>
                Agency
              </li>
              <li className='footerList flex'>
                <BsChevronRight className="icon"/>
                Tourism
              </li>
              <li className='footerList flex'>
                <BsChevronRight className="icon"/>
                Payment
              </li>
            </div>
               {/* group two */}
               <div data-aos="fade-up" 
                    data-aos-duration="4000"
               className="linkGroup">
              <span className='groupTitle'>
                PARTNERS
              </span>

              <li className='footerList flex'>
                <BsChevronRight className="icon"/>
                Trivago
              </li>
              <li className='footerList flex'>
                <BsChevronRight className="icon"/>
                Bookings
              </li>
              <li className='footerList flex'>
                <BsChevronRight className="icon"/>
                HostelWorld
              </li>
              <li className='footerList flex'>
                <BsChevronRight className="icon"/>
                Rentcars
              </li>
              <li className='footerList flex'>
                <BsChevronRight className="icon"/>
                TripAdvisor
              </li>
            </div>
            {/* group three */}
            <div data-aos="fade-up" 
                 data-aos-duration="4000"
            className="linkGroup">
              <span className='groupTitle'>
                LAST MINUTE
              </span>

              <li className='footerList flex'>
                <BsChevronRight className="icon"/>
                London
              </li>
              <li className='footerList flex'>
                <BsChevronRight className="icon"/>
                California
              </li>
              <li className='footerList flex'>
                <BsChevronRight className="icon"/>
                Ibiza
              </li>
              <li className='footerList flex'>
                <BsChevronRight className="icon"/>
                Budapest
              </li>
              <li className='footerList flex'>
                <BsChevronRight className="icon"/>
                Amsterdam
              </li>
            </div>

          </div>
          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE</small>
            <small>COPYRIGHTS RESERVED - ATULSHARMA @2023</small>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Footer;
