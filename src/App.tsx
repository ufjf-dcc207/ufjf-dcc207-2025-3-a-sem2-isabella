import Disciplina from './Disciplina';
import './App.css'

function App() {
  return <div className="app">
    <Disciplina nome="Algoritmos I - teórica" carga={4} aval="⭐⭐⭐⭐" lab={false}/>
    <Disciplina nome="Algoritmos I - prática" carga={2} aval="⭐⭐⭐⭐⭐" lab={true}/>
    <Disciplina nome="Algoritmos II - teórica" carga={4} aval="⭐⭐⭐⭐" lab={false}/>
    <Disciplina nome="Algoritmos II - prática" carga={2} aval="⭐⭐⭐⭐⭐" lab={true}/>
    <Disciplina nome="Desenvolvimento Web I" carga={2} aval="⭐⭐⭐⭐" lab={true}/>
    <Disciplina nome="Desenvolvimento Web II" carga={2} aval="⭐⭐⭐⭐" lab={true}/>
    <Disciplina nome="Organização de Computadores" carga={4} aval="⭐⭐" lab={false}/>
    <Disciplina nome="Circuitos Digitais" carga={4} aval="⭐⭐⭐⭐" lab={false}/>
    <Disciplina nome="Calculo 1" carga={4} aval="⭐⭐⭐" lab={false}/>
    <Disciplina nome="Calculo 2" carga={4} aval="⭐⭐⭐" lab={false}/>
    <Disciplina nome="Aspectos Legais da Informática" carga={2} aval="⭐⭐⭐⭐" lab={false}/>
  </div>;
}

export default App
