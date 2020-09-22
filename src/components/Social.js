/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
class Social extends Component {
    render() {
        return (
            <div className="social">
                <a href="https://codepen.io/fireside68" target="_blank">
                    {" "}
                    <i class="fab fa-codepen"> </i>
                </a>
                <a href="https://github.com/fireside68" target="_blank">
                    {" "}
                    <i class="fab fa-github"> </i>
                </a>
                <a href="https://Instagram.com/fireside68" target="_blank">
                    {" "}
                    <i class="fab fa-instagram"> </i>
                </a>
                <a href="https://www.facebook.com" target="_blank">
                    {" "}
                    <i class="fab fa-facebook-f"> </i>
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                    {" "}
                    <i class="fab fa-linkedin-in"> </i>
                </a>
            </div>
        );
    }
}
export default Social;
