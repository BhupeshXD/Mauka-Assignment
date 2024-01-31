import React from 'react';
import mrpimage from '../../assets/mrp.png';
import './Offerings.css';

const Offerings = () => {
  return (
    <div className='offering-container'>
      <h1 className='offering-title'>Our Offerings :</h1>
      <div className='offering-content'>
        <div className='offering-left'>
          <p><span className='check-icon'>✓</span><strong>10</strong> personalized mock interviews <span className='offer-text'>based on your profile</span></p>
          <p><span className='check-icon'>✓</span>Detailed feedback and <span className='offer-text'> actionable suggestions </span > after each session</p>
          <p><span className='check-icon'>✓</span><strong>10</strong> section-wise practice interviews to <span className='offer-text'>master specific skills</span></p>
          <p><span className='check-icon'>✓</span><span className='offer-text'>Comprehensive GD & PI resources,</span> including advanced strategies and tips</p>
        </div>
        <div className='offering-right'>
          <img src={mrpimage} alt="mrpimage" />
          <p>Free for first <strong><span>250</span></strong> users</p>
          <button>GET FREE ACCESS</button>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
