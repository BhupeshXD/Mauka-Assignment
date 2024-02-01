import React from 'react';
import man from '../../assets/mancomp.png';
import winner from '../../assets/winner.png';
import './How.css';

const How = () => {
  return (
    <div className='how-main'>
      <div className='how-heading'>
        <h1>Here’s how we do it:</h1>
      </div>

      <div className='how-section-1'>
        <div className='how-container-1'>
          <div className='how-1'>
            <h5>ONE</h5>
            <h1>Personalized practice</h1>
            <p>We ask you relevant questions <br />
              <i>based on your profile, </i><br />
              ensuring you get tailored  practice <br />
              that addresses your specific <br /> needs.</p>
          </div>

          <div className='how-2'>
            <h5>TWO</h5>
            <h1>Instant feedback</h1>
            <p>Receive detailed feedback on <br />every <br />
              aspect of your interview within <br />
              <i>2-3 minutes.</i></p>
          </div>
        </div>
        <img src={man} alt="right side image" />
      </div>


      <div className='how-section-2'>
        <img src={winner} alt="leftside image" />
        <div className='how-container-2'>

          <div className='how-3'>
            <h5>THREE</h5>
            <h1>Impactful responses</h1>
            <p>We guide you to improve your <br /> responses. <br />
              <i>our personalized suggestions</i><br />
              are rooted in a deep understanding of <br /> what interviewers expect out of <br />candidates.</p>
          </div>
          <div className='how-4'>
            <h5>FOUR</h5>
            <h1>Overall impact score</h1>
            <p>Understand the comprehensive impact <br /> of your interview with <br />
              <i>our unique scoring system.</i> <br />
              gauge your performance and track your <br />progress, so you can continuously refine <br /> your skills.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default How;
