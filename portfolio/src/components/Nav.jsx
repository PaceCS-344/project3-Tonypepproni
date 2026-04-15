function Nav(){
    return(
        <div id="navBar">
            <Link word={"About Me"} link={"#aboutMe"}/>
            <Link word={"Skills"} link={"#skills"}/>
            <Link word={'Projects'} link={'#projects'}/>
        </div>
    )
}

function Link({word,link}){
    return(
            <a href={link}>
                <h3>{word}</h3>
            </a>
    )
}

export default Nav