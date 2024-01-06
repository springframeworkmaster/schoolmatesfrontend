import axios from "axios";

const REST_API_URL = "https://siddharthaschoolmates-3829e7bf602a.herokuapp.com/api/schoolmates";

export const listSchoolmates = () => {
  return axios.get(REST_API_URL);
};

export const createSchoolmate = (schoolmate) => {
  return axios.post(REST_API_URL, schoolmate);
};

export const deleteSchoolmate = (id) => {
  return axios.delete(`${REST_API_URL}/${id}`);
};

export const getSchoolmateById = (id) => {
  return axios.get(`${REST_API_URL}/${id}`);
};

export const updateSchoolmate = (id, schoolmate) => {
  return axios.put(`${REST_API_URL}/${id}`, schoolmate);
};
