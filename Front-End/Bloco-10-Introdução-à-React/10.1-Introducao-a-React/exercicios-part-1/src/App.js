import React from "react";
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
  };

  const compromissos = ['Marcar cabelo', 'Marcar Dentista', 'Fazer lista de convidados', 'Encomendar docinhos'];
  

function App() {
  return <ol>
    {compromissos.map((element) => Task(element))}
    </ol>
}

export default App;
