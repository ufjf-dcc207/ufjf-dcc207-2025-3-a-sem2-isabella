import "./App.css";
import Disciplina from "./Disciplina";
import Periodo from "./Periodo";
import Vertente from "./Vertente";

type PeriodoType = [string, VertenteType[]];
type VertenteType = [string, DisciplinaType[]];
type DisciplinaType = [string, number, number, boolean];

const PERIODO: PeriodoType[] = [
  [
    "1º",
    [
      [
        "FORMAÇÃO BÁSICA",
        [
          ["Algoritmos I - teórica", 60, 3.6, false],
          ["Algoritmos I - prática", 30, 4.6, true],
          ["Geometria Analítica e Sistemas Lineares", 30, 4.3, false],
          ["Lógica e Fundamentos para a Computação", 60, 3.8, false],
          ["Desenvolvimento Web", 30, 4.2, true],
          ["Introdução à Sistemas de Informação", 30, 5, true],
        ],
      ],
      [
        "FORMAÇÃO TECNOLÓGICA",
        [
        
        ],
      ],
      [
        "FORMAÇÃO COMPLEMENTAR / HUMANÍSTICA",
        [
        
        ],
      ],
    ],
  ],
  [
    "2º",
    [
      [
        "FORMAÇÃO BÁSICA",
        [
          ["Algoritmos II - teórica", 60, 3.4, false],
          ["Algoritmos II - prática", 30, 4.2, true],
          ["Cálculo I", 60, 3.2, false],
          ["Aspectos Organizacionais de Sistemas de Informação", 60, 4.7, false],
          ["Desenvolvimento Web II", 30, 4.3, true],
        ],
      ],
      [
        "FORMAÇÃO TECNOLÓGICA",
        [
          
        ],
      ],
      [
        "FORMAÇÃO COMPLEMENTAR / HUMANÍSTICA",
        [
          ["Administração e Organização de Empresas", 60, 3.7, false],
          ["Introdução à extensão", 60, 4.6, false],
        ],
      ],
    ],
  ],
  [
    "3º",
    [
      [
        "FORMAÇÃO BÁSICA",
        [
          ["Cálculo II", 60, 4.2, false],
          ["Estrutura de Dados", 60, 3.1, false],
          ["Orientação a Objetos", 60, 3.0, false],
        ],
      ],
      [
        "FORMAÇÃO TECNOLÓGICA",
        [
          ["Desenvolvimento Web Front-End", 60, 4.4, true],
          ["Disciplina Eletiva", 30, 0.0, false],
        ],
      ],
      [
        "FORMAÇÃO COMPLEMENTAR / HUMANÍSTICA",
        [
          ["Metodologia Científica", 60, 3.8, false],
        ],
      ],
    ],
  ],
  [
    "4º", 
    [
      [
        "FORMAÇÃO BÁSICA",
        [
          ["Introdução à Estatística", 60, 3.6, false],
          ["Estrutura de Dados II", 60, 3.2, false],
        ],
      ],
      [
        "FORMAÇÃO TECNOLÓGICA",
        [
          ["Modelagem de Sistemas", 60, 4.1, false],
          ["Desenvolvimento para Dispositivos Móveis", 60, 4.9, true],
          ["Organização de Computadores", 60, 3.8, false],
        ],
      ],
      [
        "FORMAÇÃO COMPLEMENTAR / HUMANÍSTICA",
        [
          ["Aspectos Legais da Informática", 60, 4.8, false],
        ],
      ],
    ],
  ],
  [
    "5º", 
    [
      [
        "FORMAÇÃO BÁSICA",
        [
          
        ],
      ],
      [
        "FORMAÇÃO TECNOLÓGICA",
        [
          ["Sistemas Operacionais", 60, 4.2, false],
          ["Teoria dos Grafos", 60, 3.7, false],
          ["Banco de Dados", 60, 3.1, false],
          ["Engenharia de Software", 60, 4.5, false],
        ],
      ],
      [
        "FORMAÇÃO COMPLEMENTAR / HUMANÍSTICA",
        [
          ["Contabilidade Geral e Introdutória", 60, 3.6, false],
          ["Informática e Sociedade", 30, 4.9, false],
        ],
      ],
    ],
  ],
  [
    "6º", 
    [
      [
        "FORMAÇÃO BÁSICA",
        [
          
        ],
      ],
      [
        "FORMAÇÃO TECNOLÓGICA",
        [
          ["Redes de Computadores", 60, 4.2, false],
          ["Interação Humano-Computador", 60, 3.9, false],
          ["Aspectos Teóricos da Computação", 60, 3.6, false],
          ["Desenvolvimento Web Back-End", 60, 3.7, false],
        ],
      ],
      [
        "FORMAÇÃO COMPLEMENTAR / HUMANÍSTICA",
        [
          ["Empreendedorismo Tecnológico", 60, 3.2, false],
          ["Disciplina Eletiva", 30, 0.0, false],
        ],
      ],
    ],
  ],
  [
    "7º", 
    [
      [
        "FORMAÇÃO BÁSICA",
        [
          
        ],
      ],
      [
        "FORMAÇÃO TECNOLÓGICA",
        [
          ["Inteligência Artificial", 60, 4.3, false],
          ["Teste de Software", 60, 3.7, true],
          ["Aspectos Avançados em Banco de Dados", 60, 3.9, false],
          ["Aspectos Avançados em Engenharia de Software", 60, 3.5, false],
        ],
      ],
      [
        "FORMAÇÃO COMPLEMENTAR / HUMANÍSTICA",
        [
          ["Trabalho de Conclusão de Curso I", 30, 5.0, false],
          ["Disciplina Eletiva", 60, 0.0, false],
        ],
      ],
    ],
  ],
  [
    "8º", 
    [
      [
        "FORMAÇÃO BÁSICA",
        [
          
        ],
      ],
      [
        "FORMAÇÃO TECNOLÓGICA",
        [
          ["Sistemas de Apoio à Decisão", 60, 4.3, false],
          ["Segurança e Auditoria de Sistemas", 60, 3.9, false],
          ["Gerência de Projetos", 60, 4.7, false],
        ],
      ],
      [
        "FORMAÇÃO COMPLEMENTAR / HUMANÍSTICA",
        [
          ["Trabalho de Conclusão de Curso II", 60, 5.0, false],
          ["Disciplina Eletiva", 120, 0.0, false],
        ],
      ],
    ],
  ],
];

export default function App() {
  return (
    <div className="app">
      {PERIODO.map((per) => (
        <Periodo key={per[0]} periodo={per[0]}>
          {per[1].map((vert) => (
            <Vertente key={vert[0]} ramo={vert[0]}>
              {vert[1].map((disc) => (
                <Disciplina
                  key={disc[0]}
                  nome={disc[0]}
                  carga={disc[1]}
                  aval={disc[2]}
                  lab={disc[3]}
                />
              ))}
            </Vertente>
          ))}
        </Periodo>
      ))}
    </div>
  );
}

