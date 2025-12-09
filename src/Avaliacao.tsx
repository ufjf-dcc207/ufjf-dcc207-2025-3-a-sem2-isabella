import "./Avaliacao.css";

type AvaliacaoProps = {
    icone: string;
    valor: number;
}

export default function Avaliacao({icone, valor}:AvaliacaoProps){

    return(
        <div className="avaliacao">
            <span className="ativo">{icone.repeat(valor)}</span>
            <span className="inativo">{icone.repeat(5-valor)}</span>
        </div>
    );
}