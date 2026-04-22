import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons"

import { BeamCircle } from "./lightswind/beam-circle"

import './../styles/Socials.css'

const socials=[
    {name:'Tonypepproni',icon:faGithub,link:'https://github.com/Tonypepproni'},
    {name:'Nic0ro',icon:faInstagram,link:'https://www.instagram.com/nic0ro/'},
    {name:'Nicole Rossi',icon:faLinkedin,link:'https://www.linkedin.com/in/nicole-rossi-nic0ro/'}
]

function Socials(){
    return(
        <div id='AllMedias'>
            <h4>Socials</h4>
            <div id='allSocials'>
                {socials.map((social,index)=>(
                    <Card key={index}social={social}/>
                ))}
            </div>
        </div>
    )
}

function Card ({social}){
    return(
        <div className='socials'>
            <a href={social.link} className='socialLink'>
                <FontAwesomeIcon icon={social.icon} className='icon' />
                <h3>{social.name}</h3>
            </a>
        </div>
    )
}

export default Socials