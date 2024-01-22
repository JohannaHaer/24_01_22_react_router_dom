import { useState } from "react";
import Nav from "../../components/nav/Nav";

const Kontakt = () => {
    const [bgKontakt] = useState(true)
    return (
        <>
            <Nav bgKontakt={bgKontakt}/>
        </>
    );
}

export default Kontakt;