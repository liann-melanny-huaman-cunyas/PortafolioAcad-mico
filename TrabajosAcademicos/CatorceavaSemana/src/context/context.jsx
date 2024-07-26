import React, { createContext, useState, useEffect } from 'react';
import '../services/apiService.js';
import { getDepartaments, postDepartment, postProvince, postDistrict, putDepartment, putProvince, putDistrict, deleteDepartment, deleteProvince, deleteDistrict } from '../services/apiService.js';

const Context = createContext();

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDepartaments();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [data]);

  const refreshData = async () => {
    try {
      const data = await getDepartaments();
      setData(data);
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  };

  const addDepartment = (name) => {
    try {
      postDepartment(name);
      refreshData();
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  }

  const addProvince = (idDepartment, name) => {
    try {
      postProvince(idDepartment, name);
      refreshData();
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  }

  const addDistrict = (idProvince, name) => {
    try {
      postDistrict(idProvince, name);
      refreshData();
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  }

  const updateDepartament = (id, name) => {
    try {
      putDepartment(id, name);
      refreshData();
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  }

  const updateProvince = (id, name) => {
    try {
      putProvince(id, name);
      refreshData();
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  }

  const updateDistrict = (id, name) => {
    try {
      putDistrict(id, name);
      refreshData();
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  }

  const delDepartment = (id) => {
    try {
      deleteDepartment(id);
      refreshData();
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  }

  const delProvince = (id) => {
    try {
      deleteProvince(id);
      refreshData();
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  }

  const delDistrict = (id) => {
    try {
      deleteDistrict(id);
      refreshData();
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  }

  return (
    <Context.Provider value={{ data, refreshData, addDepartment, addProvince, addDistrict, updateDepartament, updateProvince, updateDistrict, delDepartment, delProvince, delDistrict }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };