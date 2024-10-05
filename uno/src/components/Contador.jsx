import React, { useState } from "react";


const Contador = function() {
    const [pontos, setpontos] = useState(0);

    return(
        <>
        <h1>Contador</h1>
        <p>Pontos {pontos}</p>

        {pontos > 10 && "parabens"}        

        <button onClick={() => setpontos(pontos +1)}>
            Incrimentar

        </button>
        </>
    );
}

export default Contador;