import "./Disciplina.css";

interface DisciplinaProps{
    nome?: string;
    carga?: number;
    aval?: string;
    lab?: boolean;
}

export default function Disciplina({
    nome = "Desconhecido",
    carga = 0.0,
    aval = "?",
    lab = true,
}: DisciplinaProps){
    return(
        <div className="disciplina">
            <div className="icone">{nome}</div>
            <div className="carga">{carga.toLocaleString()}hr/semana</div>
            <div className="avaliacao">{aval}</div>
            <-- IF ELSE PARA SALA OU LABORATÓRIO -->
            <div className="lab">Sala: {lab}</div>
        </div>
    )
}