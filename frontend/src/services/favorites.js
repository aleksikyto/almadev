import axios from "axios";
const baseUrl = "http://localhost:3001/api/favorites";

const getAll = () => {
  const request = axios
    .get(baseUrl)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log("getall error", e.message);
    });

  return request;
};

const create = (newObject) => {
  try {
    const request = axios.post(baseUrl, newObject);
    return request.then((response) => {
      return response.data;
    });
  } catch (e) {
    console.log("e", e.message);
  }
};

const deleteFavorite = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => {
    return response.data;
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll: getAll,
  create: create,
  deleteFavorite: deleteFavorite,
};
