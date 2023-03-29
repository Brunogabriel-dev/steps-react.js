import React from "react";

function Navegacao(props) {
  return (
    <div>
      <button onClick={props.voltar}>Voltar</button>
      <button onClick={props.seguir}>Seguir</button>
    </div>
  );
}

export default Navegacao;