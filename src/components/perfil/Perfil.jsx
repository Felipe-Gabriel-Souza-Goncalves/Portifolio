import "./Perfil.css"
import fotoPerfil from "../../assets/icons/fotoPerfil.png"

export default function Perfil(){
  return <>
    <div id="perfil-esquerdo">
      {/* <div id="perfil-foto"></div> */}
      <img src={fotoPerfil} alt="Foto do Felipe" />
      <div id="perfil-contatos">
        
      </div>
    </div>
    <div id="perfil-direito">

    </div>
  </>
}