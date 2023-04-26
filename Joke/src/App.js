import React, { useState, useEffect } from 'react'
import './App.scss'
import pic1 from './Asset/pic1.png'
import pic2 from './Asset/pic2.png'


export default function App() {
  
  const [jokei, Setjokei] = useState(0)

  useEffect(()=>{
    if(jokei > 4) {
      Setjokei(0)
    }
  },[jokei])

  const voting = () => {
    if(jokei === 0) {
      document.cookie = 'name1=joke1'
    } else if(jokei === 1) {
      document.cookie = 'name2=joke2'
    } else if(jokei === 2) {
      document.cookie = 'name3=joke3'
    } else if(jokei === 3) {
      document.cookie = 'name4=joke4'
    } else if(jokei === 4) {
      document.cookie = 'name5=joke5'
    }
    Setjokei(jokei+1)
  }
  return (
    <div className='app'>
        <div className='header'>
            <div className='headercontent'>
                <img src={pic1} style={{width:'28px', height:'28px'}}/>
                <img src={pic2} style={{width:'78px', height:'30px'}}/>
            </div>
        </div>

        <div className='middlebanner'>
            <h2>A joke a day keeps the doctor away</h2>
            <p>If you joke wrong way, your teeth have to pay. (Serious)</p>
        </div>

        <div className='center'>
            <div className='centercontent'>
                {
                  document.cookie.split(';').includes('name1=joke1') ?
                    document.cookie.split(';').includes(' name2=joke2') ?
                      document.cookie.split(';').includes(' name3=joke3') ?
                        document.cookie.split(';').includes(' name4=joke4') ? 
                          document.cookie.split(';').includes(' name5=joke5') ?
                            <p style={{textAlign: 'center'}}>That's all the jokes for today! Come back another day!</p>
                          : <p style={{textAlign: 'center'}}>That's all the jokes for today! Come back another day!</p>
                        : <p>A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"</p> 
                      : <p>The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying,"Because I heard my daddy tell my mommy, I am going to eat that pussy once Jimmy leaves for school today!"</p>
                    : <p>Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"</p>
                  : <p>A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."</p>
                }
                <hr style={{width: '75%'}}/>
            </div>
        </div>

        <div className='button'>
            <button className='funnybutton' onClick={voting}>This is Funny!</button>
            <button className='notfunnybutton' onClick={voting}>This is not funny.</button>
        </div>

        <div className='footer'>
            <div className='footercontent'>
              <p>This website is created as part of Hlsolutions program. The materials contained on this website are provided for general information only and do not consittute any form of advice. HLS assume no responsibility for the accuracy of any particular statement and accept no liability for any loss or damage which may arise from reliance on the information contained on this site.</p>
              <p>Copyright 2021 HLS</p>
            </div>
        </div>
    </div>
  )
}


