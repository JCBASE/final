import { Link } from 'react-router-dom'

const Welcome = () => {

    return(
        <div>
            <h1>Welcome</h1>

        <Link to = "/Page"> 
        {' '} 
        <button>Click</button> {' '}
        </Link>
        </div>
    )
}
export default Welcome