import React from 'react';
import './Header.css';
import bgimage from '../../assets/bg-image.jpg';
import samplevideo from '../../assets/video.mp4';

const Header = () => {
  return (

    <div>
      <div className='header-container'>
        <div className='bg-image'>
          {/* Add your image source in the src attribute */}
          <img src={bgimage} alt="Background" />
        </div>

        <div className='header-container'>
          <div className='header-main'>
            <h1>maukinterview<span className='beta'>beta</span><br /><p>by Mauka<sup>®</sup></p></h1>
          </div>

          <div className='header-content'>
            <p>Helps you prepare for your <strong><span className='header-col-text'>B-school interviews</span></strong> by simulating <br />an <strong><span className='header-col-text'>interview</span></strong> followed by <strong><span className='header-col-text'>instant feedback</span></strong>  on your <br /> performance, based on <strong><span className='header-col-text'>10+ criteria.</span></strong></p>
            <div className='content-right'>
              <h5 className='content-right-h5'>YOUR TECH-LED ADVANTAGE</h5>
              <button>GET ACCESS</button>
              <h5 className='content-right-h5-r'>FIRST 250 USERS WILL ENJOY <br /> EXCLUSIVE FREE ACCESS!</h5>
            </div>
          </div>
        </div>
      </div>

      {/* video section  */}
      <section className='video-section'>

        <video width="1050" height="auto" controls src={samplevideo}></video>
      </section>


    </div>

  );
};

export default Header;
