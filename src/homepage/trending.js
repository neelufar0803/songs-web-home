import React from 'react';
import './trending.css';
import weeklytop20 from './images/weeklytop20.jpg';
import socialmediatop20 from './images/socialmediatop.jpg';
import radiotop20 from './images/radiotopcharts.jpg';
import youtubetop20 from './images/YouTube-Top-20.jpg';



const trending = () => {
  return(
    <div className='trend'>
        <div class="w3-container w3-padding-32" id="projects">
        <h2 class="w3-border-bottom w3-border-light-grey w3-padding-16">Trending</h2>
        </div>

    <div class="w3-row-padding">
        <div class="w3-col l3 m6 w3-margin-bottom">
        <div class="w3-display-container">
            <div class="w3-display-topleft w3-grey w3-padding"><h4>WEEKLY TOP 20</h4></div>
            <img src={weeklytop20} alt="House" />
        </div>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
        <div class="w3-display-container">
            <div class="w3-display-topleft w3-dark-grey w3-padding"><h4>SOCIAL MEDIA TOP 20</h4></div>
            <img src={socialmediatop20} alt="House" />
        </div>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
        <div class="w3-display-container">
            <div class="w3-display-topleft w3-black w3-padding"><h4>RADIO TOP 20</h4></div>
            <img src={radiotop20} alt="House" />
        </div>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
        <div class="w3-display-container">
            <div class="w3-display-topleft w3-black w3-padding"><h4>YOUTUBE TOP 20</h4></div>
            <img src={youtubetop20} alt="House" />
        </div>
        </div>
    </div>

    <div class="w3-container w3-padding-32" id="projects">
        <h2 class="w3-border-bottom w3-border-light-grey w3-padding-16">Trending</h2>
    </div>

    

    

    <div class="w3-row-padding">
        <div class="w3-col l3 m6 w3-margin-bottom">
        <div class="w3-display-container">
            <div class="w3-display-topleft w3-black w3-padding">Summer House</div>
            <img src={weeklytop20} alt="House" />
        </div>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
        <div class="w3-display-container">
            <div class="w3-display-topleft w3-black w3-padding">Brick House</div>
            <img src={weeklytop20} alt="House" />
        </div>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
        <div class="w3-display-container">
            <div class="w3-display-topleft w3-black w3-padding">Renovated</div>
            <img src={weeklytop20} alt="House"/>
        </div>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
        <div class="w3-display-container">
            <div class="w3-display-topleft w3-black w3-padding">Barn House</div>
            <img src={weeklytop20} alt="House"/>
        </div>
        </div>
    </div>

    <div class="w3-container w3-padding-32" id="projects">
        <h2 class="w3-border-bottom w3-border-light-grey w3-padding-16">Top Albums</h2>
    </div>


    <div id="outer_wrapper">
        <div id="inner_wrapper">
            <div class="box">
                <img src={weeklytop20} alt="House" />
            </div> 
            <div class="box">
                <img src={weeklytop20} alt="House" />
            </div>
            <div class="box">
                <img src={weeklytop20} alt="House" />
            </div>
            <div class="box">
                <img src={weeklytop20} alt="House" />
            </div>
            <div class="box">
                <img src={weeklytop20} alt="House" />
            </div>
            <div class="box">
                <img src={weeklytop20} alt="House" />
            </div>
            <div class="box">
                <img src={weeklytop20} alt="House" />
            </div>
            <div class="box">
                <img src={weeklytop20} alt="House" />
            </div>
            <div class="box">
                <img src={weeklytop20} alt="House" />
            </div>
        </div>
    </div>


 
</div>

    )

}
export default trending;