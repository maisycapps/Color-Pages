import { Link } from "react-router-dom";

const Secondaries = () => {
    return ( 
        <> 
            <div className="secondaries">
                
                <Link to="/orange" className="orange">ORANGE</Link>
                <Link to="/green" className="green">GREEN</Link>
                <Link to="/purple" className="purple">PURPLE</Link>
                
            </div>
        </>
     );
}
 
export default Secondaries;