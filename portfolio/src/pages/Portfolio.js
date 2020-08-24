import React from "react";
import Image1 from "../images/Code Quiz.png";
import Image2 from "../images/Work Day Scheduler.png";

function Portfolio() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md">
                    <article class="block">
                        <h1>Portfolio</h1>
                        <hr />
                        <div class="row">
                            <div class="col-sm col-md col-lg">
                                <h4 class='imgTittle'>Coding Quiz</h4>
                                <img src={Image1} class="img-fluid port-image" alt="Code Quiz"></img>
                                <a href="https://yuliatikhonova.github.io/HW-4-Code-Quiz/" target="_blank">Link to Deployed Site</a>
                                <br></br>
                                <a href="https://github.com/yuliatikhonova/HW-4-Code-Quiz" target="_blank">Link to GitHub Repo</a>
                            </div>
                            <div class="col-sm col-md col-lg">
                                <h4 class='imgTittle'>Work Day Scheduler</h4>
                                
                                    
                                    
                            </div>
                        </div>
                        
                    </article>
                </div>
                </div>
            </div>
    )
}

export default Portfolio;