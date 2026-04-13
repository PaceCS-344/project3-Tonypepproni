import SkillTag from "./skillTag"

export const projects = [
    {name:'Tidal Hudson',desc:'A backend to pull and clean data from the USGS to be used by a unity app',tags:['Python','Jira','USGS API'],repoLink:'https://github.com/Tonypepproni/Tidal-Estuary'},
    {name:'Water Reports API',desc:'An API to access data from paces Water Report MariaDB',tags:['FastAPI','MariaDB','Python'],repoLink:null},
    {name:'National Park Map Maker',desc:'A Folium tool to easily map national park locations',tags:['Folium','Pandas','Python'],repoLink:'https://github.com/Tonypepproni/National-Park-Visitation'},
    {name:"Portfolio Website",desc:"A modern portfolio page to demonstrate skills and projects",tags:['React','JavaScript','CSS','Vite'],repoLink:'https://github.com/Tonypepproni/portfolio'},
    {name:"Blue Colab API",desc:"Refactoring Pace's Bluecolab API to Timescale and add new routes",tags:['Python','FastAPI','Timescale','Docker'],repoLink:null},
    {name:"Emitre Website",desc:'Redesigning Pace University Emitre team static website to a modern looking dynamic page',tags:['Python','Flask','Jinja','HTML5','CSS'],repoLink:'https://github.com/Tonypepproni/Cis102-emitre'}
  ]

function Projects(){
    return(
        <>
            <h2>Projects</h2>
            {projects.map((project,index)=>(
                <Card key={index} project={project} />
            ))}
        </>
    )
}

function Card({project}){
    return(
    <div>
        <h3>{project.name}</h3>
        <p>{project.desc}</p>
        <a href={project.repoLink}>Github</a>
        {project.tags.map((tag,index)=>(
            <SkillTag key={index} skill={tag} />
        ))}
    </div>
    )
}

export default Projects