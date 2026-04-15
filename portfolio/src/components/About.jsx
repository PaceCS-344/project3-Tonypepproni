import Socials from './Socials'

import cave from './../assets/cave.png'
import dune from './../assets/dune.png'
import garden from './../assets/garden.png'

import {ThreeDImageCarousel } from './lightswind/3d-image-carousel';

import './../styles/Sections.css'

const slides = [
    {id: 1, src: cave},
    {id: 2, src: dune},
    {id: 3, src: garden}
]

function About(){
    return(
        <div id='aboutMe'>
            <h2>About Me</h2>
            <div id='row'>
                <div id='personal'>
                    <ThreeDImageCarousel 
                    slides={slides} 
                    autoplay={true} 
                    delay={4} 
                    />
                    <p>Blurb</p>
                </div>
                <div id='socCon'>
                    <h3>NicoleRossiReach@gmail.com</h3>
                    <Socials />
                </div>
            </div>
        </div>
    )
}

export default About