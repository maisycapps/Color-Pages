import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <>
             <div id="navbar">

                <Link to="/" className="navHome">HOME</Link>

                <Link to="/yellow" className="navbar">YELLOW</Link>
                <Link to="/blue" className="navbar">BLUE</Link>
                <Link to="/red" className="navbar">RED</Link>

                <Link to="/orange" className="navbar">ORANGE</Link>
                <Link to="/green" className="navbar">GREEN</Link>
                <Link to="/purple" className="navbar">PURPLE</Link>

             </div>
        </>
     );
}
 
export default Nav;