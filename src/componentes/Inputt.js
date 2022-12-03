import React, { useState } from "react";
import html2canvas from "html2canvas";
export default function Inputt() {
  const [texto, setTexto] = useState(null);
  const [color, setColor] = useState("#000");
    function handleChange(event) {
       /*  console.log(event.target.value); */
        setTexto(event.target.value);
      }
      function handleChange2(event) {
    /*     console.log(event.target.value); */
        setColor(event.target.value);
      }
      const [file, setFile] = useState(null);
      const Descargar = (e) => {
        html2canvas(document.querySelector("#exportar")).then(function(canvas) {
          let img = canvas.toDataURL("memes/jpg");
          let link = document.createElement("a");
          link.download = "descarga.jpg";
          link.href = img;
          link.click();
        });
      };

  return (
    <div>
    <p>Elija una imagen: <input type="file" onChange={(e) => setFile(e.target.files[0])}></input> </p> 
     
     <p>Escribi un texto y elija su color: </p>
       <p><input name="example" onChange={handleChange} />
       <input type="color" id="color" onChange={handleChange2} /></p>
      <div className="Exportar" id="exportar">
      <label className="Texto-encima" style={{
          color: color
        }}
        >{texto}</label>
         { file ? <img alt="Preview" width="500" height="500" src={URL.createObjectURL(file)} /> : null }
      </div>
      <br></br>
      <button
        onClick={Descargar}
        type="button"
        className="btn btn-primary mt-4 mb-4"
      >
        Descargar meme
      </button>
      </div>   
  
   
  )
}