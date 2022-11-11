const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "08f693700cmshfaca3b7c904c137p18433ajsna7d26f27a8a6",
    "X-RapidAPI-Host": "skyscanner44.p.rapidapi.com",
  },
};
// import axios from 'axios';

// const search = async () => {
//   // axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${query}&rating=pg`);
//   return fetch(
//     "https://skyscanner44.p.rapidapi.com/autocomplete?query=Dallas",
//     options
//   ).then((response) => response.json());
// };
// export default { search };

export const searchFlights = (query) => {
  return fetch(
    `https://skyscanner44.p.rapidapi.com/autocomplete?q=${query}`
  ).then((response) => response.json());
};
