import { useState } from 'react';
import Modal from 'react-modal';
import SkillTag from "./SkillTag"
import './../styles/Sections.css'
import useGitHubRepos from './../hooks/useGitHubRepos';

Modal.setAppElement('#root') // ✅ required by react-modal

function Projects(){
    const { repos, loading, error } = useGitHubRepos('Tonypepproni');

    if (loading) return <p>Loading projects...</p>
    if (error) return <p>Error: {error}</p>

    return(
        <div id="projects">
            <h2>Projects</h2>
            <div id="ProjCard">
                {repos.map((repo, index) => (
                    <Card key={repo.id} repo={repo} />
                ))}
            </div>            
        </div>
    )
}

function Card({ repo }){
    const [modalIsOpen, setModalIsOpen] = useState(false)  // ✅ state for modal

    return(
        <div className="Card">
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <a href={repo.html_url} target="_blank" rel="noreferrer">Github</a>
            <div className="TagRow">
                {repo.topics.map((topic, index) => (
                    <SkillTag key={index} skill={topic} />
                ))}
            </div>
            <button onClick={() => setModalIsOpen(true)}>Learn More!</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel={repo.name}
                className={"modal"}
            >
                <button onClick={() => setModalIsOpen(false)}>X</button>
                <div className='modalCont'>
                    <h1>{repo.name}</h1>
                    <div className='modMain'>
                        <p>{repo.description}</p>
                        <ul>
                            <li>Star Count {repo.stargazers_count}</li>
                            <li>Fork Count {repo.fork_count}</li>
                            <li>Last Update {repo.updated_at}</li>
                            <li>Full Repo Name {repo.full_name}</li>
                            <li>Issue Count {repo.open_issues}</li>
                        </ul>
                    </div>
                    <h3>Languges: {repo.language}</h3>
                </div>
            </Modal>
        </div>
    )
}

export default Projects