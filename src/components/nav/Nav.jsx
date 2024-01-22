import { Link } from "react-router-dom";
import "./nav.css";

const Nav = ({bgSpeise, bgKontakt, bgOeffnungsz, bgGallerie}) => {
    return (
        <>
            <nav>
                {bgSpeise ? (
                    <Link className="active" to='/'>Speisekarte</Link>
                ) : (
                    <Link to='/'>Speisekarte</Link>
                )
                }
                {bgKontakt ? (
                    <Link className="active" to='/kontakt'>Kontakt</Link>
                ) : (
                    <Link to='/kontakt'>Kontakt</Link>
                )
                }
                {bgOeffnungsz ? (
                    <Link className="active" to='/oeffnungszeiten'>Öffnungszeiten</Link>
                ) : (
                    <Link to='/oeffnungszeiten'>Öffnungszeiten</Link>
                )
                }
                {bgGallerie ? (
                    <Link className="active" to='/gallerie'>Gallerie</Link>
                ) : (
                    <Link to='/gallerie'>Gallerie</Link>
                )
                }
            </nav>
        </>
    );
}

export default Nav;