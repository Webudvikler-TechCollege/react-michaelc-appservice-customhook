import Axios from "axios";

import API_URL from "./API_URL";
import authHeader from "./auth-header";

const getAll = (e) => {
  return Axios.get(`${API_URL}/${e}`, {
    headers: authHeader(),
  });
};

const get = (e, id) => {
  return Axios.get(`${API_URL}/${e}/${id}`, {
    headers: authHeader(),
  });
};

const create = (e, data) => {
  return Axios.post(`${API_URL}/${e}`, data, {
    headers: authHeader(),
  });
};

const login = async (uid, password) => {
  return await Axios.post(`${API_URL}/login`, { uid, password });
};

const logout = async () => {
  return await Axios.post(`${API_URL}/logout`, {
    headers: authHeader(),
  });
};

const update = (e, id, data) => {
  return Axios.put(`${API_URL}/${e}/${id}`, data, {
    headers: authHeader(),
  });
};

const remove = (e, id) => {
  return Axios.delete(`${API_URL}/${e}/${id}`, {
    headers: authHeader(),
  });
};

const findByTitle = (e, searchValue) => {
  return Axios.get(`${API_URL}/${e}/search/${searchValue}`, {
    headers: authHeader(),
  });
};

const appService = {
  getAll,
  get,
  create,
  update,
  remove,
  findByTitle,
  login,
  logout,
};

export default appService;
