import React from 'react';
import { useState } from 'react';

function ModalEdit({ isVisible, onClose, onSubmit, id, children }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(id, inputValue);
    setInputValue(""); 
    onClose(); 
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg w-1/3">
        <div className='flex items-center justify-between'>
          {children}
          <button onClick={onClose} className="float-right px-2 py-1 rounded-lg bg-red-600">
            <i className="text-lg fa-solid fa-xmark"></i>
          </button>
        </div>
        <form className="w-full max-w-sm mt-8">
          <div className="flex items-center border-b border-orange-600 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Nombre"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              onClick={handleSubmit}
              className="flex-shrink-0 bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-800 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Editar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalEdit;