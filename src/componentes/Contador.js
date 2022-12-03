import React, { useState } from "react";

export default function Componente() {
  const [valor, setValor] = useState(0);
  const [valor2, setValor2] = useState("Hola Mundo");
  const [valor3, setValor3] = useState(true);

  return (
    <div>
      <span>El valor del componente es {valor}</span>
      <button onClick={() => setValor(valor + 1)}>Aumentar valor</button>
    </div>
  );
}
