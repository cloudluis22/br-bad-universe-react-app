import axios from 'axios';

export const getData = async (searchParam) => {
  const baseURL = 'https://www.breakingbadapi.com/api';
  let endPoint = '';

  /*
      Trae a todos los personajes que cumplan con el parámetro de búsqueda.
      ---------------------------------------------------------------------
      Brings all the characters that meet the search parameter.
    */
  if (searchParam) {
    endPoint = `${baseURL}/characters?name=${encodeURI(searchParam)}`;
  } else {
    /*
        Si no hay parámetro trae a todos.
        -----------------------------------------------
        If there is no parameter it gets all characters.
      */
    endPoint = `${baseURL}/characters`;
  }

  const response = await axios.get(endPoint);
  const { data } = response;
  return data;
};
