import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import Social from "../components/Social";
import profilepic from "../img/profile_pic_linville.jpg";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profilepic} alt="" className="profilepic"></img>
        <br/>
        <ReactTypingEffect
          className="typingeffect"
          text={["I am Cedric Johnson", "I am a web developer"]}
          speed={100}
          eraseDelay={700}
        />
        <Social />
      </div>
    );
  }
}

export default Home;
