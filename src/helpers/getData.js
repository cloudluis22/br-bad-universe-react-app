import axios from 'axios';

export const getData = async (searchParam) => {
  let url;

  try {
    /*
      Trae a todos los personajes que cumplan con el parámetro de búsqueda.
      ---------------------------------------------------------------------
      Brings all the characters that meet the search parameter.
    */
    if (searchParam) {
      url = `https://www.breakingbadapi.com/api/characters?name=${encodeURI(
        searchParam
      )}`;
    } else {
      /*
        Si no hay parámetro trae a todos.
        -----------------------------------------------
        If there is no parameter it gets all characters.
      */
      url = 'https://www.breakingbadapi.com/api/characters';
    }

    const response = await axios.get(url);
    const { data } = response;
    return data;
  } catch (error) {
    throw new Error(error);
  }
};