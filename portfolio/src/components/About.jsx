import Socials from './Socials'

import cave from './../assets/cave.png'
import dune from './../assets/dune.png'
import garden from './../assets/garden.png'

import {ThreeDImageCarousel } from './lightswind/3d-image-carousel';
import { TypingText } from './lightswind/typing-text'

import useGitHubUser from './../hooks/useGitHubUser'

import './../styles/Sections.css'

const slides = [
    {id: 1, src: dune},
    {id: 2, src: cave},
    {id: 3, src: garden}
]

function About(){
        const { user, loading, error } = useGitHubUser('Tonypepproni');



    return(
        <div id='aboutMe'>
            <TypingText
                delay={0.5}
                as={'h1'}
                className='m-10'
            >Nicole Rossi</TypingText>
            <h2>About Me</h2>
            <div id='row'>
                <div id='personal'>
                    <div id='carouselWrapper'>
                    <ThreeDImageCarousel 
                        slides={slides} 
                        autoplay={true} 
                        delay={4} 
                        />
                    </div>
                    <p>Hi my name is Nicole Rossi.
                        Im a graduate from Pace University, where I got a
                        Bachelors of Science in Computer Science. I am a backend dev
                        but I love to learn new skills. When im not at my computer working
                        I am on a hike or camping.
                    </p>
                </div>
                <div id='socCon'>
                    <h3>NicoleRossiReach@gmail.com</h3>
                    <Socials />
                    <h3>Github Stats</h3>
                    <ul>
                        <li>Public Repos {user.public_repos}</li>
                        <li>Followers {user.followers}</li>
                        <li>Location {user.location}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About