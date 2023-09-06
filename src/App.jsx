import { useState } from 'react'
import "./styles.css"
import NavLogo from './img/logo.svg'
import MainBrain from './img/main-brain.svg'
import ExamQs from './img/small/exam-questions.svg'
import Flashcards from './img/small/flashcards.svg'
import MarkSchemes from './img/small/mark-schemes.svg'
import VideoImg from './img/small/video.svg'
import WaveImg from './img/wave.svg'


function App() {

  return (
    <>
      <nav class="nav main-nav">
        <ul>
          <div>
            <li><img src={NavLogo} alt="Nav Logo" class="logo" /></li>
          </div>

          <div class='nav-menu'>
            <li><a href="products.html">Products</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="resources.html" class='next-to-chevron'>Resources<div class='chevron'></div></a></li>
            <li><a href="community.html" class='next-to-chevron'>Community<div class='chevron'></div></a></li>
          </div>

          <div>
            <li><button class="login-btn" href="login.html">Login</button></li>
            <li><button class="getstarted-btn" href="get-started.html">Get Started</button></li>
          </div>
        </ul>
      </nav>


      <div class="top-background">
        <div class="main-page-top">
          <div class="main-page-grid">
            <h1 class="main-page-intro">
              Learn<br />Medicine the<br />Smart Way
            </h1>

            <p class="main-page-description">
              Quesmed is a cutting-edge learning platform designed to <br />help you excel at your exams and succeed as a doctor
            </p>
            <div class="large-mainpage-btns">
              <button class="large-getstarted-btn">Get started</button>
              <button class="large-trynow-btn">Try now</button>
            </div>
          </div>
          <div class="main-page-grid">
            <img src={MainBrain} alt="Main Page Brain" class="main-page-brain" />
          </div>
        </div>
      </div>

      <div class="mid-fact-card">
        <h2>12000+</h2>
        <h2>15000+</h2>
        <h2>100+</h2>
        <h2>250+</h2>
        <h3><img src={ExamQs} /> exam questions</h3>
        <h3><img src={Flashcards} /> anki style flashcards</h3>
        <h3><img src={VideoImg} id="eye-icon" /> video tutorials</h3>
        <h3><img src={MarkSchemes} /> OSCE mark schemes</h3>
      </div>

      <div class="second-container">
        <img src={WaveImg} />
        <h1>Learn more in less time</h1>
        <h2>Our content is written by high achieving doctors and super-powered by the<br />latest learning technology</h2>
      </div>
    </>
  )
}

export default App
