import { useParams } from "react-router-dom"


function Teste2(){
    const {mensagem} = useParams()
    return <h1>{mensagem}</h1>
}
export default Teste2

