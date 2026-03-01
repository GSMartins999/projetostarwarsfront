import { useState } from "react"


export default function Header() {

    const[pagina, setPagina] = useState()

    function passPag(pagina) {
        if(pagina)
    }
    return (
        <>
            <div>
                <button>Anterior</button>
                {pagina}
                <button>Próximo</button>
            </div>
        </>
    )
}