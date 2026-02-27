import styles from './Card.module.css'
import person from "./../../assets/person.svg"
import heart from "./../../assets/heart.svg"

function titulo(botaoclicado) {
    if (botaoclicado == "Favoritos") {
        return "FAVORITOS";
    } else {
        return "PERSONAGENS"
    }
}

function descritivo(botaoclicado) {
    if (botaoclicado == "Favoritos") {
        return "Gerencie seus personagens favoritos";
    } else {
        return "Explore a galáxia e favorite seus personagens"
    }
}


export default function Card({ itens }) {
    return (
        <>
            {console.log(itens)}
            <div className={styles.container}>
                {/* <h1 className={styles.titulo}>{titulo(props.botaoclicado)}</h1> */}
                {/* <p className={styles.descritivo}>{descritivo(props.botaoclicado)}</p> */}

                {itens.map(item => (
                    <div style={{"--url-img": `url(${item.url})`}} className={styles.containercard}  key={item.id}>
                        <div>
                            <img className={styles.iconefav} src={heart} alt="favoritos" />
                        </div>
                        <div className={styles.containerInfo}>
                            <h4 className={styles.titulo}>{item.nome}</h4>
                            <p className={styles.descritivo}>Nascimento: {item.nascimento}</p>
                            <p className={styles.descritivo}>Gênero: {item.genero}</p>
                            <p className={styles.descritivo}>Altura: {item.altura}</p>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}   