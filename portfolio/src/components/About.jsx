import Socials from './Socials'

import './../styles/Sections.css'

function About(){
    return(
        <div id='aboutMe'>
            <h2>About Me</h2>
            <div id='row'>
                <div id='personal'>
                    <h3>Img</h3>
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