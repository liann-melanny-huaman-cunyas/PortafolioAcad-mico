import Province from "./Province"
import React, { useState, useRef, useEffect, useContext } from 'react';
import { Context } from "../context/context"

import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";

function Department({ id, name, provinces }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { addProvince, updateDepartament, delDepartment } = useContext(Context);

  const [isModalVisibleAdd, setIsModalVisibleAdd] = useState(false);
  const [isModalVisibleEdit, setIsModalVisibleEdit] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const openModalAdd = () => {
    setIsModalVisibleAdd(true);
  };

  const openModalEdit = () => {
    setIsModalVisibleEdit(true);
  };

  const closeModalAdd = () => {
    setIsModalVisibleAdd(false);
  };

  const closeModalEdit = () => {
    setIsModalVisibleEdit(false);
  };

  return (
    <div className="department w-7/12 mx-40 border my-2 mx-2 py-2 px-2" key={id} ref={dropdownRef}>
      <div className="flex items-center">
        <h3 className="text-5xl">{name}</h3>
        <div className="w-full justify-end flex">
          {provinces.length >= 1 && (
            <button
              type="button"
              className="text-xl mt-2 mx-2 py-1 px-2 rounded-md border-gray-300"
              onClick={toggleDropdown}
            >
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          )}
          <button
            className="rounded-lg text-2xl mt-2 mx-2 py-1 px-2 bg-blue-600"
            onClick={openModalAdd}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
          <button 
            className="rounded-lg text-2xl mt-2 mx-2 py-1 px-2 bg-orange-600"
            onClick={openModalEdit}
            >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          {provinces.length === 0 ? (
            <button onClick={() => delDepartment(id)} className="rounded-lg text-2xl mt-2 mx-2 py-1 px-2 bg-red-600">
              <i className="fa-solid fa-trash"></i>
            </button>
          ) : (
            <button disabled className="rounded-lg text-2xl mt-2 mx-2 py-1 px-2 bg-gray-600">
              <i className="fa-solid fa-trash"></i>
            </button>
          )}
        </div>
      </div>
      {isOpen && provinces.map((province) => (
        <Province key={province.id} id={province.id} name={province.name} districts={province.districts} />
      ))}
      <ModalAdd isVisible={isModalVisibleAdd} onClose={closeModalAdd} onSubmit={addProvince} id={id}>
        <h2>Agregar provincia</h2>
      </ModalAdd>
      <ModalEdit isVisible={isModalVisibleEdit} onClose={closeModalEdit} onSubmit={updateDepartament} id={id}>
        <h2>Editar departamento</h2>
      </ModalEdit>
    </div>
  );
}
export default Department
