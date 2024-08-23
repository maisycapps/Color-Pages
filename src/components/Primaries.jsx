import { Link } from "react-router-dom";

const Primaries = () => {
    return ( 
        <> 
            <div className="primaries">
                <Link to="/yellow" className="yellow">YELLOW</Link>
                <Link to="/blue" className="blue">BLUE</Link>
                <Link to="/red" className="red">RED</Link>
            </div>
        </>
     );
}
 
export default Primaries;