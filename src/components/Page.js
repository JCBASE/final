import { Link } from 'react-router-dom'

const Page =() => {

    return(
        <div>
        <h1>Hello</h1>
        <Link to = "/Welcome"> 
        {' '} 
        <button>Welcome Page</button> {' '}
        </Link>
        <p>A lot could have been done here.</p>
        <p>But the sign up page was pretty cool.</p>
        <p>Just click the button.</p>
        </div>
    )
}
export default Page