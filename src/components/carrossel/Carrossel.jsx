import seta from "../../assets/icons/setaDireita.svg"
import "./Carrossel.css"

export default function Carrossel(){
  
  return <>
    <div className="carrossel">
      <div className="btn-prev">
        <button>
          <img src={seta} alt="<" />  
        </button>
      </div>      
      <div className="itensCarrossel"></div>
      <div className="btn-post">
        <button>
          <img src={seta} alt=">" />  
        </button>
      </div>      
    </div>
  </>
}