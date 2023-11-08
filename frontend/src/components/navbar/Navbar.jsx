import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
    return (
        <div className='container'>
           <div className='navbar'>
                Madhu's Kitchen
                <Link to={"/login"}>
                    <button className='btn'>Login</button>
                </Link>
                <Link to={"/restaurant"}>
                    <button className='btn'>Restaurant</button>
                </Link>
            </div>
        </div>
    );
}
export default Navbar;