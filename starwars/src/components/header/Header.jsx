import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import styles from "./Header.module.css"
import person from "./../../assets/doubleperson.svg"
import heart from "./../../assets/heart.svg"
import { goToFavoritos, goToInicial } from "../../Router/cordinator"

export default function Header() {

    const navigate = useNavigate()
    const location = useLocation()

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.logo}> <b>STAR WARS DEX</b></h1>
                <div className={styles.containerbotao}>
                    {location.pathname === "/"?
                        (
                            <>
                            <button className={styles.botao1} onClick={() => goToInicial(navigate)}><img src={person} className={styles.icone1} alt="iconeperson" /><b>Personagens</b></button>
                            <button className={styles.botao2} onClick={() => goToFavoritos(navigate)}><img src={heart} className={styles.icone2} alt="iconefavorite" /><b>Favoritos</b></button>
                            </>
                        ) : (
                            <>
                            <button className={styles.botao2} onClick={() => goToInicial(navigate)}><img src={person} className={styles.icone2} alt="iconeperson" /><b>Personagens</b></button>
                            <button className={styles.botao1} onClick={() => goToFavoritos(navigate)}><img src={heart} className={styles.icone1} alt="iconefavorite" /><b>Favoritos</b></button>
                            </>
                        )}
                   </div>
            </div>
        </>
    )
}