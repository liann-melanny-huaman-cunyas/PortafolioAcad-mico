import './App.css'
import './services/apiService.js'

import Department from './components/Department.jsx';
import React, {useState, useContext } from 'react';
import { Context } from './context/context.jsx';

import ModalAdd from "./components/ModalAdd";

function App() {
  const { data } = useContext(Context);

  const { addDepartment } = useContext(Context);

  const [isModalVisibleAdd, setIsModalVisibleAdd] = useState(false);

  const openModalAdd = () => {
    setIsModalVisibleAdd(true);
  };

  const closeModalAdd = () => {
    setIsModalVisibleAdd(false);
  };
  return (
    <div>
      <button
            className="rounded-lg text-2xl mt-2 mx-2 py-1 px-2 bg-blue-600"
            onClick={openModalAdd}>
        <i className="fa-solid fa-plus"></i>
      </button>
      {data.map((department) =>
        <Department id={department.id} name={department.name} provinces={department.provinces} />
      )}
      <ModalAdd isVisible={isModalVisibleAdd} onClose={closeModalAdd} onSubmit={addDepartment}>
        <h2>Agregar departamento</h2>
      </ModalAdd>
    </div>
  )
}

export default App
