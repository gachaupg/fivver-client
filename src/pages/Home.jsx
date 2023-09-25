import React from "react";
import Hero from "./Hero";
import LiveCall from "./LiveCall";
import { Button } from "react-bootstrap";
import Reviews from "./Reviews";
import Faq from "./FAQ";

const Home = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Hero />

      <div className="home-items">
        <div className="left">
          <h1 style={{color:'maroon'}}>Make every Interaction Count.</h1>
          <p >
            Backed by 14 technology patents that leverage proprietary
            machine-learning, Chorus is the fastest growing Conversation
            Intelligence product in existence.
          </p>
          <div className="home-btns">
            <Button variant="outline-danger" className="btn-home">
              Ask your Question
            </Button>
            <Button className="btn-home1">Request for a live Call</Button>
          </div>
        </div>
        <div className="right"></div>
        <img
          style={{ width: "50%" }}
          src="https://res.cloudinary.com/pitz/image/upload/v1695635658/WhatsApp_Image_2023-09-22_at_11.36.04_PM_fz94q2.jpg"
          alt=""
        />
      </div>
      <div  style={{marginTop:'2.5rem'}} className="home-conva">
        <h1 style={{textAlign:'center'}}>Bring the power of your story to every conversation.</h1>
        <div className="home-conva-details">
          <div className="home-conva-left">
           <div>
           <p> SALES CALL ANALYSIS</p>

<h1>Instantly access transcriptions and insights</h1>
           </div>
           <div>
           <p>
              Chorus helps performance-driven sales teams capture and analyze
              all customer calls, meetings, and emails to create visibility,
              drive process and behavior changes, and deliver bottom line
              impact.
            </p>
           </div>
            
            <div className="home-btns">
            <Button variant="outline-danger" className="btn-home">
              Ask your Question
            </Button>
            <Button className="btn-home1">Request for a Demo</Button>
          </div>
          </div>
          <div className="home-conva-right">
            <img src="https://content.zoominfo.com/wp-content/uploads/2022/03/Frame-101352.png?w=1920&q=75" alt="" />
          </div>
        </div>
      </div>

      <div style={{marginTop:'4.5rem'}} className="main-sev">
        <img
          src="https://content.zoominfo.com/wp-content/uploads/2022/01/chorus-team.png?w=1080&q=75"
          alt=""
        />

        <div className="home-services">
          <div className="engagement">
            <h3>Sales Engagement</h3>
            Be where your prospects are
          </div>
          <div className="meetings">
            <h3> Meetings</h3>
            Book high value meetings in seconds
          </div>
          <div className="meetings">
            <h3>MyBirdie AI</h3>
            Send the right message at the right time, powered by AI
          </div>
          <div className="meetings">
            <h3>Plays</h3>
            End-to-end automation, right out of the box
          </div>
        </div>
      </div>
      <Faq/>
      <Reviews/>
    </div>
  );
};

export default Home;
