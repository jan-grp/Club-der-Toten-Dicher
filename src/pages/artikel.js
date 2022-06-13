

import ArtikelNavbar from "../components/Artikel/navbar"
import ArtikelContainer from "../components/Artikel/artikelContainer"

import { artikel } from "../components/Artikel/data"

const Arktikel = () => {
    return(
        <div>
            <ArtikelNavbar />

            {artikel.map((item, index) => (
                <ArtikelContainer 
                    key={index}
                    artikel={item}
                />
            ))}
        </div>
    )
}

export default Arktikel