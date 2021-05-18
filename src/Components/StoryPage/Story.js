import React from 'react'
import './Story.css'
import airpod from '../Img/airpod.jpg'

function Story() {
  return (
    <section className='StoryDivMain'>
      <div className='VidHold'>
        <a href='https://www.youtube.com/watch?v=BaLHthRsqQk' className='YouTubeCard'>
          <img src={airpod} alt='' className='YouTubeCard' />
        </a>
      </div>
      <div className='SubStorydiv'>
        <div className='TestingDiv'>
          {/* <div className='StoryTextCard'> */}
          <div className='StoryText'>
            <div className='strTitTxt'>
              Transforming Customer Engagement through Voice
              </div>
            <div className='strSmTxt'>
              <p>
                James Odede, a developer in Kenya built Voice Memo, a web application that allows you to build your own customer call center. Using Voice Memo, you can connect with customers using various channels including inbound, outbound Voice and SMS
            </p>
              <p>
                Using our fully featured Voice API, James has been able to build a platform that supports many businesses who are looking to enhance their customer engagement experience.
            </p>
            </div>
            <button className='StrBtn'>Read Their Story </button>
          </div>
          {/* <div className='YouTubeCard'>

            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

export default Story
