import axios from 'axios';

const APIkey = '019b4a415e0bdb4a9a855e780186ed3d';
const key = '200500335-bfb8aea0b3b7bd9cd1d6c11299046b38';
const proxyURL = 'https://cors-anywhere.herokuapp.com/';



export const fetchRoutes = async () => {
  const response = await axios.get(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=46.118549&lon=-74.592957&maxDistance=100&minDiff=5.6&maxDiff=5.10&key=${key}`)
  return response.data;
}

export const fetchWeather = async () => {
  const response = await axios.get(`${proxyURL}https://api.darksky.net/forecast/${APIkey}/46.118549,-74.592957`)
  return response.data;
}


