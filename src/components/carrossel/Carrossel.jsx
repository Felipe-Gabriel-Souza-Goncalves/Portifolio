import seta from "../../assets/icons/setaDireita.svg";
import { imgProjetos, imgTecnologias } from "../../utils/imagens.js";
import projetos from "../../utils/projetos.js";
import "./Carrossel.css";

function Carrossel({ categoria }) {
  console.log(imgProjetos);

  return (
    <>
      <div className="carrossel">
        <div className="btn-prev">
          <button>
            <img src={seta} alt="<" />

          </button>
        </div>

        <div className="itensCarrossel">{}</div>

        <div className="btn-post">
          <button>
            <img src={seta} alt=">" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Carrossel;
