import axios from 'axios';

export const getData = async () => {
  const url = 'https://www.breakingbadapi.com/api/characters';
  const response = await axios.get(url);
  const { data } = await response;
  console.log(data);
};
