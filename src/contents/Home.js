import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import Social from "../components/Social";
import profilepic from "../img/profile_pic_linville.jpg";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <div>
          <ReactTypingEffect
            className="typingeffect"
            text={["I am Cedric Johnson", "I am a web developer"]}
            speed={100}
            eraseDelay={700}
          />
        </div>
        
        <img src={profilepic} alt="" className="profilepic"></img>
        <br/>
        <Social />
      </div>
    );
  }
}

export default Home;
