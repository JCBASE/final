import { Link } from 'react-router-dom'

const Nope = () => {

    return(
        <div>
            <h1>Page does not exist</h1>
        <div>
        <Link to = "/"> 
        {' '} 
        <button>Welcome Page</button> {' '}
        </Link>
        </div>
        </div>
    )
}
export default Nope