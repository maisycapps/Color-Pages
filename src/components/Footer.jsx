import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <>
             <div id="footer">

                <Link to="/primaries" className="footer">PRIMARY COLORS</Link>

                <Link to="/secondaries" className="footer">SECONDARY COLORS</Link>

             </div>
        </>
     );
}
 
export default Footer;