import styles from './Card.module.css'
import person from "./../../assets/person.svg"
import heart from "./../../assets/heart.svg"
import trash from "./../../assets/trash.svg"
import pen from "./../../assets/pen.svg"
import yellowheart from "./../../assets/yellowheart.png"
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../footer/Footer'




export default function Card({ itens, currentPage, setCurrentPage, totalPages }) {

    const [listaFavoritos, setListaDeFavoritos] = useState([])
    const location = useLocation()

    //Função para armazenar um item em uma lista baseado em um estado.
    //Tentei por push antes, mas os dados não atualizam corretamente
    function favoritado(itemfavoritado) {
        if(listaFavoritos.some((personagem) => personagem.name === itemfavoritado.name)){
            alert("Você já favoritou esse item!")
        }else if (itemfavoritado) {
            setListaDeFavoritos([...listaFavoritos, itemfavoritado])
        } else {
            "Não foi possível favoritar esse item"
        }
    }

    //Comparamos se o personagem possui um nome igual a um existente dentro da lista de favoritos e então removemos ele
    function removerDosFavoritos(itemParaRemover) {
        if (itemParaRemover) {
            setListaDeFavoritos(listaFavoritos.filter((personagem) => personagem.name !== itemParaRemover.name))
        }
    }

    function estaFavoritado(carditem) {
            return (listaFavoritos.some((item) => item.name === carditem.name))
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.containerMensagem}>
                    {location.pathname === "/" ?
                        (
                            <>
                                <h1 className={styles.titulo}>PERSONAGENS</h1>
                                <p className={styles.descritivo}>Explore a galáxia e favorite seus personagens</p>
                            </>
                        )
                        :
                        (
                            <>
                                <h1 className={styles.titulo}>FAVORITOS</h1>
                                <p className={styles.descritivo}>Gerencie seus personagens favoritos</p>
                            </>
                        )
                    }

                </div>

                <div className={styles.containerPaiCard}>
                    {location.pathname === "/" ? (<>
                        {itens.map(item => (
                            // <div style={{ "--url-img": `url(${item.url})`, border: estaFavoritado(item)?"#ffbf00 solid 2px":"#828994 solid 2px"}} className={styles.containercard} key={item.name}>
                            <div style={{border: estaFavoritado(item)?"#ffbf00 solid 2px":"#828994 solid 2px"}} className={styles.containercard} key={item.name}>
                            {console.log(item.url)}
                                <div className={styles.containerIcone}>
                                    <img className={styles.iconefav} src={estaFavoritado(item)?(yellowheart):(heart)} alt="favoritos" onClick={() => favoritado(item)} style={{filter: estaFavoritado(item) ? "invert(56%) sepia(8%) saturate(395%) hue-rotate(182deg) brightness(88%) contrast(86%)" : "invert(56%) sepia(8%) saturate(395%) hue-rotate(182deg) brightness(88%) contrast(86%)"}}/>
                                </div>
                                <img src={person} style={{width: "50px", height:"50px"}} alt="iconepessoa" />
                                <div className={styles.containerInfo}>
                                    <p className={styles.nomepersonagem}>{item.name}</p>
                                    <ul className={styles.listaInfo}>
                                        <li className={styles.infos}>Nascimento: {item.birth_year}</li>
                                        <li className={styles.infos}>Gênero: {item.gender}</li>
                                        <li className={styles.infos}>Altura: {item.height}</li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </>
                    ) : (
                        <>
                            {listaFavoritos.length > 0 ? (<>
                                {listaFavoritos.map(item => (
                                    <div style={{ "--url-img": `url(${item.url})`, border: estaFavoritado(item)?"#ffbf00 solid 2px":"#828994 solid 2px" }} className={styles.containercard} key={item.name}>
                                        <div className={styles.containerIcone}>
                                            {/* <img className={styles.iconefav} src={pen} style={{filter: estaFavoritado(item) ? "invert(56%) sepia(8%) saturate(395%) hue-rotate(182deg) brightness(88%) contrast(86%)" : "invert(56%) sepia(8%) saturate(395%) hue-rotate(182deg) brightness(88%) contrast(86%)"}} alt="editar" onClick={() => favoritado(item)} /> */}
                                            <img className={styles.iconefav} src={trash} alt="excluirFavoritos" onClick={() => removerDosFavoritos(item)} />
                                        </div>
                                        <img src={person} style={{width: "50px", height:"50px"}} alt="iconepessoa" />
                                        <div className={styles.containerInfo}>
                                            <p className={styles.nomepersonagem}>{item.name}</p>
                                            <ul className={styles.listaInfo}>
                                                <li className={styles.infos}>Nascimento: {item.nascimento}</li>
                                                <li className={styles.infos}>Gênero: {item.genero}</li>
                                                <li className={styles.infos}>Altura: {item.altura}</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </>
                            )
                                :
                                (
                                    <>
                                        <div className={styles.containerListaVazia}>
                                            <img style={{ width: "100px", height: "100px" }} src={heart} alt="coracao" />
                                            <p className={styles.descritivo} style={{ fontSize: "1rem" }}>Nenhum favorito ainda</p>
                                            <p className={styles.descritivo}>Volte à lista de personagens e adicione alguns!</p>
                                        </div>
                                    </>
                                )
                            }
                        </>
                    )}
                </div>
                <div>
                    {location.pathname === "/"?(<><Footer currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/></>):(<></>)}
                </div>
            </div>
        </>
    )
}   