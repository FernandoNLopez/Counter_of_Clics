import React from "react";
import '../stylesheet/counter.css'

function Counter ({ numOfClics }) {
    return (
        <div className="counter-div">
          {numOfClics}
        </div>
    );
}

export default Counter;