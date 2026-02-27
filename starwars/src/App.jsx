import './App.css'
import Card from './components/card/Card'
import Header from './components/header/header'

const personagens = [{
  id: 1,
  nome: "Luke",
  genero: "Masculino",
  nascimento: 1970,
  altura: "1.72m",
  url:"https://tse3.mm.bing.net/th/id/OIP.6xywxeNGmrCpXrZHnzTIJwHaMB?rs=1&pid=ImgDetMain&o=7&rm=3"
}, {
  id: 2,
  nome: "R2-D2",
  genero: "Masculino",
  nascimento: 1970,
  altura: "0,80m",
  url: "https://wallpapercave.com/wp/wp13481304.jpg"
}
];


function App() {

  return (
    <>
      <Header />
      <Card itens={personagens} />
    </>
  )
}

export default App
