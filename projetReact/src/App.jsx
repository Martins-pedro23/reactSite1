import {BrowserRouter, Routes, Route} from "react-router-dom"
import Contato from "./pages/Contato"
import Sobre from "./pages/Sobre"
import Home from "./pages/Home"
import Teste1 from "./pages/Teste1"
import Teste2 from "./pages/Teste2"

function App(){
    return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/contato" element={<Contato/>}/>
            <Route path="*" element={<Teste1/>}/>
            <Route path="/teste/:mensagem" element={<Teste2/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      ) 
      
}

export default App