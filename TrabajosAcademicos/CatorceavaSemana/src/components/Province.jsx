import District from "./District"
import React, { useState, useRef, useEffect, useContext } from 'react';
import { Context } from "../context/context"

import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";

function Province({ id, name, districts }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { addDistrict, updateProvince, delProvince } = useContext(Context);

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
    <div className="province border my-2 mx-2 py-2 px-2" key={id} ref={dropdownRef}>
      <div className="flex items-center">
        <h3 className="text-2xl">{name}</h3>
        <div className="w-full justify-end flex">
          {districts.length >= 1 && 
            (
              <button
                type="button"
                className="text-xl mt-2 mx-2 py-1 px-2 rounded-md border-gray-300"
                onClick={toggleDropdown}
              ><i class="fa-solid fa-chevron-down"></i>
              </button>
            )
          }
          <button 
            onClick={openModalAdd} 
            className="rounded-lg text-2xl mt-2 mx-2 py-1 px-2 bg-blue-600">
              <i class="fa-solid fa-plus"></i>
          </button>
          <button 
          onClick={openModalEdit} 
          className="rounded-lg text-xl mt-2 mx-2 py-1 px-2 bg-orange-600">
            <i class="fa-solid fa-pen-to-square"></i>
            </button>
          {districts.length == 0 ?
            (
              <button onClick={() => {delProvince(id)}}  className="rounded-lg text-2xl mt-2 mx-2 py-1 px-2 bg-red-600"><i class="fa-solid fa-trash"></i></button>
            ) : (
              <button disabled className="rounded-lg text-2xl mt-2 mx-2 py-1 px-2 bg-gray-600"><i class="fa-solid fa-trash"></i></button>
            )
          }
        </div>
      </div>
      {isOpen && (
        districts.map((district) =>
          <District id={district.id} name={district.name} />
        )
      )}
      <ModalAdd isVisible={isModalVisibleAdd} onClose={closeModalAdd} onSubmit={addDistrict} id={id}>
        <h2>Agregar distrito</h2>
      </ModalAdd>
      <ModalEdit isVisible={isModalVisibleEdit} onClose={closeModalEdit} onSubmit={updateProvince} id={id}>
        <h2>Editar provincia</h2>
      </ModalEdit>
    </div>
  )
}

export default Province