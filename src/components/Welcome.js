import { Link } from 'react-router-dom'

const Welcome = () => {

    return(
        <div>
            <h1>Welcome</h1>
        <div>
        <Link to = "container"> 
        {' '} 
        <button>Click</button> {' '}
        </Link>
        </div>
        </div>
    )
}
export default Welcome