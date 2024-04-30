import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function PaginationItem({ pagina, setPagina, maximo }) {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(parseInt( input) + 1);
    setPagina(parseInt( pagina ) + 1);
  };

  const backPage = () => {
    setInput(parseInt( input) - 1);
    setPagina(parseInt( pagina ) - 1);
  };

  const onKeyDown = e => {
    if (e.keyCode == 13) {
      setPagina(parseInt(e.target.value));
      if (
        parseInt(e.target.value < 1) ||
        parseInt(e.target.value) > Math.ceil(maximo) ||
        isNaN(parseInt(e.target.value))
      ) {
        setPagina(1);
        setInput(1);
      } else {
        setPagina(parseInt(e.target.value));
      }
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className=" container my-10">
      <div className="flex items-center justify-center gap-3 my-2">
        <button
          disabled={pagina == 1 || pagina < 1}
          className="bg-gray-600 p-2 rounded-md h-10 justify-center "
          onClick={backPage}
        >
          back
        </button>
        <input
          onChange={e => onChange(e)}
          onKeyDown={e => onKeyDown(e)}
          value={input}
          type="text"
          placeholder="Pagina"
          className="text-gray-700 rounded-md p-2 w-16 h-10 justify-center text-center"
          autoComplete="off"
          name="page"
        />
        
        <button
          disabled={ pagina == Math.ceil(maximo) || pagina > maximo }
          className="bg-gray-600 p-2 rounded-md h-10 justify-center "
          onClick={nextPage}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default PaginationItem;
