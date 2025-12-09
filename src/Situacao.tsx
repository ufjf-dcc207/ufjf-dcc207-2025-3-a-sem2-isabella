import { useState } from "react";
import "./Situacao.css";

const SITUACOES = new Map<string, string>([
    ["naoCursado", "❌"],
    ["aprovado", "✅"],
    ["cursando", "⏳"],
]);

export default function Situacao(){
    const [situacao, setSituacao] = useState("naoCursado");

    function onAtualiza(){
        switch(situacao){
            case "naoCursado" :
                setSituacao("cursando");
                break;
            case "cursando" :
                setSituacao("aprovado");
                break;
            case "aprovado" :
                setSituacao("naoCursando");
                break;    
            default:
                setSituacao("naoCursado");
                break;
        }
    }    
    
    return(
        <div className="emoji">
            <div>
                <button onClick={onAtualiza}>{SITUACOES.get(situacao) || "💀"}</button>
            </div>
        </div>
    )
}