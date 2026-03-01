import axios from 'axios';
import './App.css'
import Card from './components/card/Card'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { use, useEffect, useState } from 'react';
import { BASE_URL } from './constants';


const personagens = [{
  id: 1,
  nome: "Luke",
  genero: "Masculino",
  nascimento: 1970,
  altura: "1.72m",
  url: "https://tse3.mm.bing.net/th/id/OIP.6xywxeNGmrCpXrZHnzTIJwHaMB?rs=1&pid=ImgDetMain&o=7&rm=3"
}, {
  id: 2,
  nome: "R2-D2",
  genero: "Masculino",
  nascimento: 1970,
  altura: "0,80m",
  url: "https://cdna.artstation.com/p/assets/images/images/023/737/396/large/caden-finch-screen-shot-2020-01-28-at-12-37-02-am.jpg?1580193717"
}, {
  id: 3,
  nome: "Darth Varder",
  genero: "Masculino",
  nascimento: 1980,
  altura: "1,80m",
  url: "https://www.hdwallpapers.in/download/star_wars_darth_vader_power_4k_hd-HD.jpg"
}
];





function App() {

  const [person, setPerson] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)


  
  useEffect(() => {
   const getStarWarsApi = async () => {
    try {
      const response = await axios.get(`${BASE_URL}?page=${currentPage}`);
      // const response = await axios.get(`${BASE_URL}`);
      setPerson(response.data.results);
      setTotalPages(Math.ceil(response.data.count / 10))
      console.log(response.data.results);
      console.log(totalPages)
    } catch (error) {
      console.log("Erro ao buscar personagens");
      console.log("Error response")
    }
  };
    getStarWarsApi();
  }, [currentPage])


  return (
    <>
      <Header />
      <Card itens={person} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
    </>
  )
}

export default App
