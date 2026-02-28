import styles from './Card.module.css'
import person from "./../../assets/person.svg"
import heart from "./../../assets/heart.svg"
import { useState } from 'react';
import { Route } from 'react-router-dom';




export default function Card({ itens }) {

    const [listaFavoritos, setListaDeFavoritos] = useState([])


        function titulo(botaoclicado) {
        if (botaoclicado == "Favoritos") {
            return "FAVORITOS";
        } else {
            return "PERSONAGENS"
        }
    }

    function descritivo(botaoclicado) {
        if (location("/favoritos") == "Favoritos") {
            return "Gerencie seus personagens favoritos";
        } else {
            return "Explore a galáxia e favorite seus personagens"
        }
    }

    //Função para armazenar um item em uma lista baseado em um estado.
    //Tentei por push antes, mas os dados não atualizam corretamente
    function favoritado(itemfavoritado) {
        if (itemfavoritado) {
            setListaDeFavoritos([...listaFavoritos, itemfavoritado])
        }
    }

    //Comparamos se o personagem possui um nome igual a um existente dentro da lista de favoritos e então removemos ele
    function removerDosFavoritos(itemParaRemover) {
        if (itemParaRemover) {
            setListaDeFavoritos(listaFavoritos.filter((personagem) => personagem.nome !== itemParaRemover.nome))
        }
    }

    function estaFavoritado (carditem){
        if(listaFavoritos.map((item) => item.id === item.id)){
            return(
                "#ffbf00 solid 2px"
            )
        } else{
            return(
                "#828994 solid 2px"
            )
        }
    }

    
    // if(item.url == ""; src={person};<img className={styles.iconefav} src={heart} alt="favoritos" onClick={() => favoritado(item)} />)
    return (
        <>
            {console.log(itens)}
             {console.log(listaFavoritos)}
            <div className={styles.container}>
                <div className={styles.containerMensagem}>
                    <h1 className={styles.titulo}>PERSONAGENS</h1>
                    <p className={styles.descritivo}>Explore a galáxia e favorite seus personagens</p>
                </div>

                <div className={styles.containerPaiCard}>
                    {itens.map(item => (
                        <div style={{ "--url-img": `url(${item.url})`, border: estaFavoritado(item)}} className={styles.containercard} key={item.id}>
                            <div className={styles.containerIcone}>
                                <img className={styles.iconefav} src={heart} alt="favoritos" onClick={() => favoritado(item)} />
                            </div>
                            <div className={styles.containerInfo}>
                                <p className={styles.nomepersonagem}>{item.nome}</p>
                                <ul className={styles.listaInfo}>
                                    <li className={styles.infos}>Nascimento: {item.nascimento}</li>
                                    <li className={styles.infos}>Gênero: {item.genero}</li>
                                    <li className={styles.infos}>Altura: {item.altura}</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}   