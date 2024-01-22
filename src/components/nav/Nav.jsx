import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
    return (
        <>
            <nav>
                <Link to='/'>Speisekarte</Link>
                <Link to='/kontakt'>Kontakt</Link>
                <Link to='/oeffnungszeiten'>Öffnungszeiten</Link>
                <Link to='/gallerie'>Gallerie</Link>
            </nav>
        </>
    );
}

export default Nav;