import { Inicial } from "../Pages/Inicial"
import { Favoritos } from "../Pages/Favoritos"
import { BrowserRouter, Routes, Route } from "react-router-dom";


export const Router = () => {

    return(
        // Criando nossas rotas:
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Inicial/>}/>
            <Route path="/Favoritos" element={<Favoritos />} />
        </Routes>
        </BrowserRouter>
    )
}