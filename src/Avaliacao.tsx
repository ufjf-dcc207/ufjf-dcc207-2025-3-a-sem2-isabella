import { useState } from "react";
import "./Avaliacao.css";

type AvaliacaoProps = {
    icone: string;
}

export default function Avaliacao({icone}:AvaliacaoProps){
    const [valor, setValor] = useState(0);
    function onAvaliar(){
        if(valor === 5){
            setValor(0);
        }else{
            setValor(valor+1);
        }
    }

    return(
        <div className="avaliacao">
            <span className="ativo">{icone.repeat(valor)}</span>
            <span className="inativo">{icone.repeat(5-valor)}</span>
            <button onClick={onAvaliar}>+</button>
        </div>
    );
}