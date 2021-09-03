import { useEffect, useState } from "react";
import NumeroMegaSenaDisplay from "../../components/MegaSena/NumeroMegaSenaDisplay";
import { mega } from "../../functions/MegaSena/mega";

export default function Megasena() {
  

  const [valor, setValor] = useState(6)
  const [numeros, setNumeros] = useState([])

  useEffect(() => {
    setNumeros(mega())
  },[])

  function renderizarNumeros() {
    return numeros.map(
      n => <NumeroMegaSenaDisplay key={n} numero={n} />)
  }

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "#5398ff",
      height: "100vh"
    }} >
      <h1>Mega Sena</h1>  
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {renderizarNumeros()}
      </div>
      <div >
        <input type="number" 
               min={6} max={15} 
               value={valor} 
               onChange={e => setValor(e.target.value)} 
               style={{fontSize:"1rem"}}/>
        <button style={{fontSize:"1rem"}} 
          onClick={() => setNumeros(mega(valor))}>Gerar Números</button>
      </div>
    </div>
  )
}