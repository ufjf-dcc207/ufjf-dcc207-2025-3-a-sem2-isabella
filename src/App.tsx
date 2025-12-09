import "./App.css";
import Disciplina from "./Disciplina";
import Periodo from "./Periodo";
import Vertente from "./Vertente";

type PeriodoType = [string, VertenteType[]];
type VertenteType = [string, DisciplinaType[]];
type DisciplinaType = [string, number, boolean];


const PERIODO: PeriodoType[] = [
  [
    "1º",
    [
      [
        "FORMAÇÃO BÁSICA",
        [
          ["Algoritmos I - teórica", 60, false],
          ["Algoritmos I - prática", 30, true],
          ["Geometria Analítica e Sistemas Lineares", 30,  false],
          ["Lógica e Fundamentos para a Computação", 60,  false],
          ["Desenvolvimento Web", 30, true],
          ["Introdução à Sistemas de Informação", 30, true],
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
          ["Algoritmos II - teórica", 60, false],
          ["Algoritmos II - prática", 30, true],
          ["Cálculo I", 60, false],
          ["Aspectos Organizacionais de Sistemas de Informação", 60, false],
          ["Desenvolvimento Web II", 30, true],
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
          ["Administração e Organização de Empresas", 60, false],
          ["Introdução à extensão", 60, false],
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
          ["Cálculo II", 60, false],
          ["Estrutura de Dados", 60, false],
          ["Orientação a Objetos", 60, false],
        ],
      ],
      [
        "FORMAÇÃO TECNOLÓGICA",
        [
          ["Desenvolvimento Web Front-End", 60, true],
          ["Disciplina Eletiva", 30, false],
        ],
      ],
      [
        "FORMAÇÃO COMPLEMENTAR / HUMANÍSTICA",
        [
          ["Metodologia Científica", 60, false],
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
          ["Introdução à Estatística", 60, false],
          ["Estrutura de Dados II", 60, false],
        ],
      ],
      [
        "FORMAÇÃO TECNOLÓGICA",
        [
          ["Modelagem de Sistemas", 60, false],
          ["Desenvolvimento para Dispositivos Móveis", 60, true],
          ["Organização de Computadores", 60, false],
        ],
      ],
      [
        "FORMAÇÃO COMPLEMENTAR / HUMANÍSTICA",
        [
          ["Aspectos Legais da Informática", 60, false],
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
          ["Sistemas Operacionais", 60, false],
          ["Teoria dos Grafos", 60, false],
          ["Banco de Dados", 60, false],
          ["Engenharia de Software", 60, false],
        ],
      ],
      [
        "FORMAÇÃO COMPLEMENTAR / HUMANÍSTICA",
        [
          ["Contabilidade Geral e Introdutória", 60, false],
          ["Informática e Sociedade", 30, false],
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
          ["Redes de Computadores", 60,  false],
          ["Interação Humano-Computador", 60, false],
          ["Aspectos Teóricos da Computação", 60, false],
          ["Desenvolvimento Web Back-End", 60, false],
        ],
      ],
      [
        "FORMAÇÃO COMPLEMENTAR / HUMANÍSTICA",
        [
          ["Empreendedorismo Tecnológico", 60, false],
          ["Disciplina Eletiva", 30, false],
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
          ["Inteligência Artificial", 60, false],
          ["Teste de Software", 60, true],
          ["Aspectos Avançados em Banco de Dados", 60, false],
          ["Aspectos Avançados em Engenharia de Software", 60, false],
        ],
      ],
      [
        "FORMAÇÃO COMPLEMENTAR / HUMANÍSTICA",
        [
          ["Trabalho de Conclusão de Curso I", 30, false],
          ["Disciplina Eletiva", 60, false],
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
          ["Sistemas de Apoio à Decisão", 60, false],
          ["Segurança e Auditoria de Sistemas", 60, false],
          ["Gerência de Projetos", 60, false],
        ],
      ],
      [
        "FORMAÇÃO COMPLEMENTAR / HUMANÍSTICA",
        [
          ["Trabalho de Conclusão de Curso II", 60, false],
          ["Disciplina Eletiva", 120, false],
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
                  lab={disc[2]}
                />
              ))}
            </Vertente>
          ))}
        </Periodo>
      ))}
    </div>
  );
}

