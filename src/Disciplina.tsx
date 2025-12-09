import "./Disciplina.css";
import Avaliacao from "./Avaliacao";
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
            
            {lab && <div className="lab">LABORATÓRIO</div>}
            
        </div>
    )
}