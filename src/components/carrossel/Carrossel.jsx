import seta from "../../assets/icons/setaDireita.svg";
import { projetos, tecnologias } from "../../utils/projetos.js";
import "./Carrossel.css";

function Carrossel({ categoria }) {

  return (
    <>
      <div className="carrossel">
        <div className="btn-prev">
          <button>
            <img src={seta} alt="<" />
          </button>
        </div>

        {/* Itens do carrossel */}
        <div className="itensCarrossel">
          {(() => {
            switch (categoria) {
              case "front-end":

                return tecnologias.frontEnd[0].map((nome, i) => (
                  <div key={i} className="card-tech">
                    <img className="img-item-carrossel" src={tecnologias.frontEnd[1][i]} alt={nome} />
                    <h2>{nome}</h2>
                  </div>
                ));

              case "back-end":

                return tecnologias.backEnd[0].map((nome, i) => (
                  <div key={i} className="card-tech">
                    <img className="img-item-carrossel" src={tecnologias.backEnd[1][i]} alt={nome} />
                    <h2>{nome}</h2>
                  </div>
                ));

              case "outros":

                return tecnologias.outros[0].map((nome, i) => (
                  <div key={i} className="card-tech">
                    <img className="img-item-carrossel" src={tecnologias.outros[1][i]} alt={nome} />
                    <h2>{nome}</h2>
                    {console.log(nome)}
                  </div>
                ));

              default:
                return <div>Categoria não especificada</div>;
            }
          })()}
        </div>

        <div className="btn-post">
          <button>
            <img src={seta} alt="<" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Carrossel;
