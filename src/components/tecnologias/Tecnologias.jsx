import "./Tecnologias.css"
import Carrossel from "../carrossel/Carrossel"

export default function Tecnologias(){
  
  return <>
    <div id="tecnologias">
      <div id="faixaTecnologia">
        <h2>Principais tecnologias</h2>
      </div>

      <div id="tech-back-end">
        <h3>Back-End</h3>
        <Carrossel categoria={"back-end"}></Carrossel>
      </div>

      <div id="tech-front-end">
        <h3>Front-End</h3>
        <Carrossel categoria={"front-end"}></Carrossel>
      </div>

      <div id="tech-outros">
        <h3>Outros</h3>
        <Carrossel categoria={"outros"}></Carrossel>
      </div>

    </div>
  </>
}