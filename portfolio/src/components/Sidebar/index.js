import React from "react";
import Image from "../../images/20200701_214128.jpg";
import "./style.css";

function Sidebar() {
    return (
        <div id="wrapper">

            <div id="sidebar-wrapper">
                <ul class="sidebar-nav">
                    <br></br>
                    <li>
                        <img src={Image} />
                    </li>
                    <br></br>
                    <li>
                        <h1>Portfolio</h1>
                        <h5>by Yulia Tikhonova</h5>
                    </li>
                    <br></br>
                    <hr />
                    <br></br>
                    <li>
                        <a href="#">Contact Me</a>
                    </li>
                    <li>
                        <a href="#">GitHub</a>
                    </li>
                    <li>
                        <a href="#">LinkedIn</a>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
