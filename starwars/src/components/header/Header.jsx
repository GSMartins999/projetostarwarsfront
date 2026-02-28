import styles from "./Header.module.css"
import person from "./../../assets/doubleperson.svg"
import heart from "./../../assets/heart.svg"
import { goToFavoritos, goToInicial } from "../../Router/Cordinator"


export default function Header() {

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.logo}> <b>STAR WARS DEX</b></h1>
                <div className={styles.containerbotao}>
                    <button className={styles.botao1} ><img src={person} className={styles.icone1} alt="iconeperson" /><b>Personagens</b></button>
                    <button className={styles.botao2}><img src={heart} className={styles.icone2} alt="iconefavorite" /><b>Favoritos</b></button>
                </div>     
            </div>
        </>
    )
}