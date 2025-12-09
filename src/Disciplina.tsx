import "./Disciplina.css";
import Avaliacao from "./Avaliacao";
import Situacao from "./Situacao";

type DisciplinaProps = {
    nome: string;
    carga: number;
    lab: boolean;
}

export default function Disciplina({
    nome,
    carga,
    lab,
}: DisciplinaProps){

    return(
        <div className="disciplina">
            <div className="nome">{nome}</div>
            <div className="carga">{carga.toLocaleString()}hr</div>
            <div className="aval">
                <Avaliacao icone="⭐"></Avaliacao>
            </div>
            <div className="instancia">
                <Situacao />
            </div>
            {lab && <div className="lab">LABORATÓRIO</div>}
            
        </div>
    )
}