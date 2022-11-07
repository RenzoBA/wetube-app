import axios from "axios";

export const getAddress = async () => {
  const {
    data: { countryISO2 },
  } = await axios.get(
    "https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation",
    {
      params: { apikey: process.env.REACT_APP_IPLOCATION_API_KEY },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_API_KEY,
        "X-RapidAPI-Host":
          "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
      },
    }
  );
  return countryISO2;
};

export const getData = async (url) => {
  const regionCode = await getAddress();
  const { data } = await axios.get(
    `https://youtube-v31.p.rapidapi.com/${url}`,
    {
      params: {
        maxResults: "16",
        regionCode: regionCode,
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    }
  );
  return data;
};
