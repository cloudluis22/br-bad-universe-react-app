import axios from 'axios';

export const getData = async (searchParam) => {
  try {
    const url = `https://www.breakingbadapi.com/api/characters?category=${encodeURI(
      searchParam
    )}`;
    const response = await axios.get(url);
    const { data } = await response;
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
