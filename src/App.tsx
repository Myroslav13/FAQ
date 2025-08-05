import { useState } from 'react'
import './App.css'

function App() {
  const [stateButton1, setStateButton1] = useState(false);
  const [stateButton2, setStateButton2] = useState(false);
  const [stateButton3, setStateButton3] = useState(false);
  const [stateButton4, setStateButton4] = useState(false);

  return (
    <>
      <div className='upper-container position-absolute z-0 top-0 start-0'>
      </div>

      <div className='container position-relative z-1 bg-white rounded-4 p-4'>
        <div className='d-flex align-items-center gap-3'>
          <img src='./assets/images/icon-star.svg'/>
          <h1 className='text-start fs-1 fw-bold'>FAQs</h1>
        </div>

        <div className='text-start section'>
          <div className='d-flex justify-content-between align-items-center pt-3 pb-2'>
            <h2 className='fs-6'>What is Frontend Mentor, and how will it help me?</h2>
            <button className="btn" onClick={() => setStateButton1(!stateButton1)}><img src={`${stateButton1 === true ? "./assets/images/icon-minus.svg":"./assets/images/icon-plus.svg"}`}></img></button>
          </div>

          <p className={`${stateButton1 === true? 'd-block': "d-none"}`}>Frontend Mentor offers realistic coding challenges to help developers improve their 
          frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
          all levels and ideal for portfolio building.</p>
        </div>

        <div className='text-start section'>
          <div className='d-flex justify-content-between align-items-center pt-3 pb-2'>
            <h2 className='fs-6'>Is Frontend Mentor free?</h2>
            <button className="btn" onClick={() => setStateButton2(!stateButton2)}><img src={`${stateButton2 === true ? "./assets/images/icon-minus.svg":"./assets/images/icon-plus.svg"}`}></img></button>
          </div>

          <p className={`${stateButton2 === true? 'd-block': "d-none"}`}>Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
          option providing access to a range of projects suitable for all skill levels.</p>
        </div>

        <div className='text-start section'>
          <div className='d-flex justify-content-between align-items-center pt-3 pb-2'>
            <h2 className='fs-6'>Can I use Frontend Mentor projects in my portfolio?</h2>
            <button className="btn" onClick={() => setStateButton3(!stateButton3)}><img src={`${stateButton3 === true ? "./assets/images/icon-minus.svg":"./assets/images/icon-plus.svg"}`}></img></button>
          </div>

          <p className={`${stateButton3 === true? 'd-block': "d-none"}`}>Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
          way to showcase your skills to potential employers!</p>
        </div>
        
        <div className='text-start section'>
          <div className='d-flex justify-content-between align-items-center pt-3 pb-2'>
            <h2 className='fs-6'>How can I get help if I'm stuck on a Frontend Mentor challenge?</h2>
            <button className="btn" onClick={() => setStateButton4(!stateButton4)}><img src={`${stateButton4 === true ? "./assets/images/icon-minus.svg":"./assets/images/icon-plus.svg"}`}></img></button>
          </div>
          
          <p className={`${stateButton4 === true? 'd-block': "d-none"}`}>The best place to get help is inside Frontend Mentor's Discord community. There's a help 
          channel where you can ask questions and seek support from other community members.</p>
        </div>
      </div>
    </>
  )
}

export default App
