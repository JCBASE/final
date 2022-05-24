import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "../style/Navbar.css"
const Welcome = () => {

    const [showLinks, setShowLinks] = useState(false)

    return(
        <div className="Navbar"> 
        <div className="left">
            <div className="links" id = {showLinks ? "hidden" : ""}>
        <Link to = "/Welcome">Welcome</Link>
        <Link to = "/Page">Page</Link>
        </div>
        <button onClick = {()=> setShowLinks(!showLinks)}> Open Nav</button>
        </div>
        <div className="right">
            <input type = "text" placeholder='Search...'/>
            <button>Search</button>
            </div>

        </div>
    )
}
export default Welcome