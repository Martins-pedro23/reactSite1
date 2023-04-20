import {BrowserRouter, Routes, Route} from "react-router-dom"
import Contato from "./pages/Contato"
import Sobre from "./pages/Sobre"
import Home from "./pages/Home"

function App(){
    return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/sobre"  element={<Sobre/>}/>
            <Route path="/contato"  element={<Contato/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      ) 
      
}

export default App