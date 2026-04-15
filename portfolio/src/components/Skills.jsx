import { InteractiveCard } from './lightswind/interactive-card';

import SkillTag from './SkillTag'

import '../styles/Sections.css'

export const skills = [
    {name: 'Langauges & Frameworks',tags:['Python','JavaScripts','C++','Lua','Cobol','ReactJS','HTML5','CSS','BootStrap'],icon:'code'},
    {name: 'Python Libraries',tags:["FastAPI",'pydantic','Folium','Flask','Pandas','Jinja','Numpy','discord.py'],icon:'python'},
    {name:'Tools & Platforms',tags:['Jira','VS Code','Git','Discord','Microsoft Office 365'],icon:'tool'},
    {name:'Databases',tags:['Timecale','MariaDB']},
    {name:'Relevant Course Work',tags:['Software Engineering','Database Managment And Design','Web Scripting','Web Authoring','Public Speaking','Intro to Mobile App Development'],icon:'school'}
]

function Skills(){
    return(
        <div id='skills'>
            <h2>Skills</h2>
            {skills.map((skillSec,index)=>(
                <SkillSection skills={skillSec}/>
            ))}
        </div>
    )
}

function SkillSection({skills}){
    return(
        <InteractiveCard 
        className='SkillCard'
        InteractiveColor='#9D00FF'
        >
            <h2>{skills.name}</h2>
            <div className='skillTagRow'>
                {skills.tags.map((tag,index)=>(
                    <SkillTag key={index} skill={tag}/>
                ))}
            </div>
        </InteractiveCard>
    )
}


export default Skills