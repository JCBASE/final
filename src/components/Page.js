import { Link } from 'react-router-dom'

const Page = () => {

    return(
        <div>
        <h1>Hello</h1>
        <Link to = "/Welcome"> 
        {' '} 
        <button>Welcome Page</button> {' '}
        </Link>
        </div>
    )
}
export default Page