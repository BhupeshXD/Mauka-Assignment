import React from 'react';
import './Features.css';
import trophy from '../../assets/throphy.png';
import stairs from '../../assets/stairs.png';
import arrow from '../../assets/arrow.png';
import thought from '../../assets/thought.png';


const Features = () => {
  return (
    <div >
      <div className='features-headings'>
        <h5>AI-GENERATED FEEDBACK</h5>
        <h1>Feedback that helps you:</h1>
      </div>

      <div className='features-container'>
        <div className='features-leftside'>
          <div className='featurebox-1'>
            <p>Identify your  <br />
              <strong>strengths</strong> & <br /> emphasize them
              </p>
            <h5>STRENGTHS</h5>
            <img src={trophy} alt="trophy" />
          </div>
        </div>

        <div className='features-rightside'>
          <div className='featurebox-2'>
            <div className='horizontal-box'>
              <p>Track your <strong>progress</strong> over time</p>
              <h5>PROGRESS</h5>
              <img src={stairs} alt="stairs" />
            </div>
          </div>
          <div className='container-inner'>
            <div className='featurebox-3'>
              <p>With suggestions for <br /><strong>improved</strong> brresponses</p>
              <h5>SUGGESTIONS</h5>
              <img src={arrow} alt="arrow" />
            </div>

            <div className='featurebox-4'>
              <p>Highlight your <br /> areas of <br /><strong>improvement</strong></p>
              <h5>WEAKNESS</h5>
              <img src={thought} alt="thought" />
            </div>
          </div>

        </div></div>
<div className='feature-btn'>
<button className='feature-button'>GET Access</button>
</div>
      

    </div>


  );
}

export default Features;
