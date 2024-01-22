import { useState } from "react";
import Nav from "../../components/nav/Nav";

const Gallerie = () => {
    const [bgGallerie] = useState(true)
    return (
        <>
            <Nav bgGallerie={bgGallerie}/>
        </>
    );
}

export default Gallerie;