import { HamburgerMenuOverlay } from "./lightswind/hamburger-menu-overlay"

const menuItems = [
    {label:"About Me",href:'#aboutMe'},
    {label:"Skills",href:'#skills'},
    {label:'Projects',href:'#projects'}
]

function Nav(){
    return(
        <div id="navBar">
            <HamburgerMenuOverlay 
            items={menuItems}
            buttonTop="30px"
            buttonLeft="60px"
            buttonColor="#6b22c5"
            overlayBackground="#6b22c5"
            onOpen={() => console.log("Menu opened")}
            onClose={() => console.log("Menu closed")}
            />
            <h3>Nicole Rossi</h3>
        </div>
    )
}

export default Nav