import axios from "axios";

export function getDepartaments() {
  return axios.get('http://localhost:8081/api/departments')
    .then(response => {
      return response.data;
    })
    .catch(e => {
      console.log(e);
      throw e;
    });
}

export function postDepartment (name) {
  return axios.post('http://localhost:8081/api/departments', {
      name: name
  }).then(response => {
    return response.data;
  }).catch(e => {
    console.log(e);
    throw e;
  });
} 

export function postProvince (idDepartment, name) {
  return axios.post('http://localhost:8081/api/provinces', {
      name: name,
      department: {
        id: idDepartment
      }
  }).then(response => {
    return response.data;
  }).catch(e => {
    console.log(e);
    throw e;
  });
} 

export function postDistrict (idProvince, name) {
  return axios.post('http://localhost:8081/api/districts', {
      name: name,
      province: {
        id: idProvince
      }
  }).then(response => {
    return response.data;
  }).catch(e => {
    console.log(e);
    throw e;
  });
} 

export function putDepartment (id, name) {
  return axios.put(`http://localhost:8081/api/departments/${id}`, {
      name: name
  }).then(response => {
    return response.data;
  }).catch(e => {
    console.log(e);
    throw e;
  });
} 

export function putProvince (id, name) {
  return axios.put(`http://localhost:8081/api/provinces/${id}`, {
      name: name
  }).then(response => {
    return response.data;
  }).catch(e => {
    console.log(e);
    throw e;
  });
} 

export function putDistrict (id, name) {
  return axios.put(`http://localhost:8081/api/districts/${id}`, {
      name: name
  }).then(response => {
    return response.data;
  }).catch(e => {
    console.log(e);
    throw e;
  });
} 

export function deleteDepartment (id) {
  return axios.delete(`http://localhost:8081/api/departments/${id}`)
  .then(response => {
    return response.data;
  }).catch(e => {
    console.log(e);
    throw e;
  });
} 

export function deleteProvince (id) {
  return axios.delete(`http://localhost:8081/api/provinces/${id}`)
  .then(response => {
    return response.data;
  }).catch(e => {
    console.log(e);
    throw e;
  });
} 

export function deleteDistrict (id) {
  return axios.delete(`http://localhost:8081/api/districts/${id}`)
  .then(response => {
    return response.data;
  }).catch(e => {
    console.log(e);
    throw e;
  });
} 