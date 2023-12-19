const API = {
    REACT_APP_API_URL : 'https://api.openweathermap.org/data/2.5',
    REACT_APP_API_KEY : '69bd5f719e8fd8e1cc2a438eedad5d29',
    REACT_APP_ICON_URL : 'https://openweathermap.org/img/w'
}

export const geoApiOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",// enter your rapid api key here
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export default API