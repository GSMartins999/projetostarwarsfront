import { useState } from "react"
import styles from "./Footer.module.css"


export default function Footer({currentPage, setCurrentPage, totalPages}) {

    return (
        <>
            <div className={styles.container}>
                <button className={styles.botao2} disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>{"<"} Anterior</button>
                <p className={styles.numeroPagina}>{currentPage}</p>
                <button className={styles.botao2} disabled={currentPage === totalPages}onClick={() => setCurrentPage(currentPage + 1)}>Posterior {">"}</button>
            </div>
        </>
    )
}