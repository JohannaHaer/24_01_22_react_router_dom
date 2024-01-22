import { useState } from "react";
import Nav from "../../components/nav/Nav";

const Oeffnungszeiten = () => {
    const [bgOeffnungsz] = useState(true)
    return (
        <>
            <Nav bgOeffnungsz={bgOeffnungsz}/>
        </>
    );
}

export default Oeffnungszeiten;