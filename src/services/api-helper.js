import axios from 'axios';

const key = '200500335-bfb8aea0b3b7bd9cd1d6c11299046b38';



export const fetchRoutes = async () => {
  const response = await axios.get(`https://www.mountainproject.com/data/get-routes?routeIds=105748391,105750454&key=${key}`)
  return response.data;
}


