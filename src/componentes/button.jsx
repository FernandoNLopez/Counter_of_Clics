import React from 'react';
import '../stylesheet/button.css'

function Button({ text, clicButton, clicHandler }) {    //sintaxis de desustructuracion, en vez de usar el objeto props entero
    return (
      <button className={clicButton ? "clic-button" : "reset-button"}
      onClick={clicHandler}>
        {text} 
      </button>
    );
}

export default Button;    // un componente