import { forwardRef } from 'react'
import './../styles/tag.css'

const SkillTag = forwardRef(({ skill, highlight }, ref) => {
    const isMatch = highlight && skill.toLowerCase().includes(highlight.toLowerCase())

    return (  
        <div
            ref={isMatch ? ref : null}
            tabIndex={isMatch ? -1 : undefined}  
            className={`tag ${isMatch ? 'highlighted' : ''}`}
        >
            <p>{skill}</p>
        </div>
    )
})

export default SkillTag