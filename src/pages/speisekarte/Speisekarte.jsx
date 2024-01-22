import { useState } from "react";
import Nav from "../../components/nav/Nav";

const Speisekarte = () => {
    const [bgSpeise] = useState(true)
    return (
        <>
            <Nav bgSpeise={bgSpeise}/>
        </>
    );
}

export default Speisekarte;