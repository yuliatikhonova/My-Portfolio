import React from "react";
import "./style.css";

function Contact() {
    return ( 
        <div class="container">
            <h2>Contact me</h2>
            <br />
            <div class="row">
                <div class="col-4">
                    <p><i class="fa fa-envelope-o" aria-hidden="true" /></p>
                    <p>yuliatikhonova@outlook.com</p>
                </div>
                <div class="col-4" id="city">
                    <p><i class="fa fa-map-marker" aria-hidden="true" /></p>
                    <p>Phoenix, AZ</p>
                </div>
                <div class="col-4">
                <p><i class="fa fa-mobile" aria-hidden="true" /></p>
                <p>623-628-8050</p>
                </div>
            </div>
        </div>
    )
};

export default Contact;
