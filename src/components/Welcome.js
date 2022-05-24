import React, {useState} from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
const Welcome = () => {


    return(
        <div>
            <Navbar /> 
            <h1>Welcome</h1>
            <p>Try shrinking the page.</p>
            <p>Did you click "Open Nav"?</p>
            <p>Cool, oh the search bar? Yeah that doesn't work, it's for asthetic.</p>
            <p>NGL, worked on this final for 2 days, just went for checking requirements.</p>
            <p>A lot happened, so just enjoy the routing.</p>
            </div>
    )
}
export default Welcome