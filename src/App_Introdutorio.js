import React, { useState } from 'react';

import Logon from './pages/Logon';

//import Header from './Header';

//JSX (JavasScript XML), quando HTML está integrado dentro do JavaScript
//Componente React = função que retorna HTML e pode ter funcionalidades JavaScript, CSS
//Propriedade React é similar a um atributo HTML 
//Estado refere-se a uma informação a ser mantida por um componente React
//Imutabilidade ...

function App() {
  const [counter, setCounter] = useState(0); //useState() retorna um array [valor, funcaoDeAtualizacaoDoValor]

  function increment(){
    setCounter(counter + 1);
    console.log(counter);
  }

  return (
    <div>
      {/*<Header title="Semana OmniStack" /> //Uso de um compoente como uma tag HTML ou alternativamente*/}
        <Header> Contador: {counter} </Header>
        <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
