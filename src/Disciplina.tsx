import "./Disciplina.css";

type DisciplinaProps = {
    nome: string;
    carga: number;
    aval: number;
    lab: boolean;
}

export default function Disciplina({
    nome,
    carga,
    aval,
    lab,
}: DisciplinaProps){
    return(
        <div className="disciplina">
            <div className="nome">{nome}</div>
            <div className="carga">{carga.toLocaleString()}hr</div>
            {aval > 4.2 ? (
                <div className="aval">Avaliação: {aval.toLocaleString()}</div>
            ) : (
                <div className="avalBaixa">Avaliação: {aval.toLocaleString()}</div>
            )}
            {lab && <div className="lab">LABORATÓRIO</div>}
            
        </div>
    )
}