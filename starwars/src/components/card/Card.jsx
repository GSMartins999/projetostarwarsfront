import styles from './Card.module.css'
import person from "./../../assets/person.svg"
import heart from "./../../assets/heart.svg"

function titulo(botaoclicado){
    if(botaoclicado == "Favoritos"){
        return "FAVORITOS";
    } else{
        return "PERSONAGENS"
    }
}

function descritivo(botaoclicado){
    if(botaoclicado == "Favoritos"){
        return "Gerencie seus personagens favoritos";
    } else{
        return "Explore a galáxia e favorite seus personagens"
    }
}

export default function Card(props) {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.titulo}>{titulo(props.botaoclicado)}</h1>
                <p className={styles.descritivo}>{descritivo(props.botaoclicado)}</p>
                 <div className={styles.containercard}>
                    <div>
                        <img className={styles.iconefav} src={heart} alt="favoritos" />
                    </div>
                    <img className={styles.iconeperson} src={person} alt="iconepessoa" />
                    <div className={styles.containerInfo}>
                        <h4 className={styles.nomepersonagem}>Luke SkyWalker</h4>
                        <p className={styles.infos}>Nascimento: 1970</p>
                        <p className={styles.infos}>Gênero: Masculino</p>
                        <p className={styles.infos}>Altura: 1.72m</p>
                    </div>
                </div>
            </div>
    
        </>
    )
}   