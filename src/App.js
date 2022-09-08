import './App.css';
import Button from './componentes/button.jsx';
import Counter from './componentes/counter.jsx'
import brainLogo from './imagenes/cerebro-logo.webp';
import { useState } from 'react';

function App() {

  const [numOfClics, setNumClics] = useState(0);

    const clicHandler = () => {
      setNumClics(numOfClics + 1);
    }

    const resetCounter = () => {
      setNumClics(0);
    }



  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
            className='logo'
            src={brainLogo} 
            alt='Logo de cerebro' />
      </div>
      <div className='contenedor-principal'>
        
        <Counter
          numOfClics={numOfClics}/>

        <Button
          text='Clic' 
          clicButton={true} 
          clicHandler={clicHandler} />


        <Button
          text='Reset' 
          clicButton={false}
          clicHandler={resetCounter} />
      </div>
    </div>
  );
}

export default App;
