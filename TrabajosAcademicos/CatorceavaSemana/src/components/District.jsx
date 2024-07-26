import React, { useState, useRef, useEffect, useContext } from 'react';
import { Context } from "../context/context"

import ModalEdit from "./ModalEdit";

function District({id, name}) {
  const { updateDistrict, delDistrict } = useContext(Context);

  const [isModalVisibleEdit, setIsModalVisibleEdit] = useState(false);
  const openModalEdit = () => {
    setIsModalVisibleEdit(true);
  };
  const closeModalEdit = () => {
    setIsModalVisibleEdit(false);
  };

  return (
    <div className="district border my-2 mx-2 py-2 px-2" key={id}>
     <div className="flex items-center w-full justify-between">
        <h3 className="text-lg">{name}</h3>
        <div className="justify-end flex">
          <button onClick={openModalEdit} className="rounded-lg text-sm mt-2 mx-2 py-1 px-2 bg-orange-600"><i class="fa-solid fa-pen-to-square"></i></button>
          <button onClick={() => {delDistrict(id)}} className="rounded-lg text-sm mt-2 mx-2 py-1 px-2 bg-red-600"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
      <ModalEdit isVisible={isModalVisibleEdit} onClose={closeModalEdit} onSubmit={updateDistrict} id={id}>
        <h2>Editar distrito</h2>
      </ModalEdit>
    </div>
  )
}
export default District