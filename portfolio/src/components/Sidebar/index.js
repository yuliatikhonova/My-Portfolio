import React from "react";
import Image from "../../images/20200701_214128.jpg";
import "./style.css";

function Sidebar() {
    return (
        <section className="sidebar">
                <div className="container">
                    <br/>
                    <img src={Image} alt="Yulia" />
                    <br /><br />
                    <h2> Portfolio</h2>
                    <h4>by Yulia Tikhonova</h4>
                </div>
                <br /><br />
                <div className="bar block">
                    <ul>
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
        </section>
    );
}

export default Sidebar;

