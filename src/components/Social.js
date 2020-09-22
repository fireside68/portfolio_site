/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';
class Social extends Component {
    render() {
        return (
            <div className="social">
                <SocialIcon url="https://codepen.io/fireside68" target="_blank" rel="noopener noreferrer" />
                <SocialIcon url="https://github.com/fireside68" target="_blank" rel="noopener noreferrer" />
                <SocialIcon url="https://Instagram.com/fireside68" target="_blank" rel="noopener noreferrer" />
                <SocialIcon url="https://www.facebook.com/cedric.johnson.391082" target="_blank" rel="noopener noreferrer" />
                <SocialIcon url="https://www.linkedin.com/in/cedric-johnson-88464380/" target="_blank" rel="noopener noreferrer" />
            </div>
        );
    }
}
export default Social;
