import { useState, useRef, useEffect } from "react"
import { InteractiveCard } from './lightswind/interactive-card';
import { ExpandableSearchBar } from "./lightswind/expandable-search-bar"
import SkillTag from './SkillTag'
import '../styles/Sections.css'

export const skills = [
    {name: 'Langauges & Frameworks', tags:['Python','JavaScripts','C++','Lua','Cobol','ReactJS','HTML5','CSS','BootStrap'], icon:'code'},
    {name: 'Python Libraries', tags:["FastAPI",'pydantic','Folium','Flask','Pandas','Jinja','Numpy','discord.py'], icon:'python'},
    {name:'Tools & Platforms', tags:['Jira','VS Code','Git','Discord','Microsoft Office 365'], icon:'tool'},
    {name:'Databases', tags:['Timecale','MariaDB']},
    {name:'Relevant Course Work', tags:['Software Engineering','Database Managment And Design','Web Scripting','Web Authoring','Public Speaking','Intro to Mobile App Development'], icon:'school'}
]

function Skills(){
    const [query, setQuery] = useState("")
    const firstMatchRef = useRef(null)

    useEffect(() => {
        if (query.trim() && firstMatchRef.current) {
            firstMatchRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
            firstMatchRef.current.focus()
        }
    }, [query])

    const display = query.trim().length > 0
        ? skills.map(section => ({
            ...section,
            tags: section.tags.filter(tag =>
                tag.toLowerCase().includes(query.toLowerCase())
            )
          })).filter(section => section.tags.length > 0)
        : skills

    let firstMatchAssigned = false
    const getRef = () => {
        if (!firstMatchAssigned) {
            firstMatchAssigned = true
            return firstMatchRef
        }
        return null
    }

    return(
        <div id='skills'>
            <h2>Skills</h2>
            <ExpandableSearchBar
                placeholder='Search a Skill'
                onChange={setQuery}  // ✅ was onSearch
            />
            {display.length === 0
                ? <p>No skills match "{query}"</p>
                : display.map((skillSec, index) => (
                    <SkillSection
                        key={index}
                        skills={skillSec}
                        query={query}
                        getRef={getRef}
                    />
                ))
            }
        </div>
    )
}

function SkillSection({ skills, query, getRef }){
    return(
        <InteractiveCard 
            className='SkillCard'
            InteractiveColor='#9D00FF'
        >
            <h2>{skills.name}</h2>
            <div className='skillTagRow'>
                {skills.tags.map((tag, index) => (
                    <SkillTag
                        key={index}
                        skill={tag}
                        highlight={query}
                        ref={getRef()}
                    />
                ))}
            </div>
        </InteractiveCard>
    )
}

export default Skills