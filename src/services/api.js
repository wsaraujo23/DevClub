import Axios from "axios";

const api = Axios.create({
  baseURL: "https://api.themoviedb.org/3/",

  params: {
    api_key: "e3233ec74d8e043ac670495cb81c952a",
    language: "pt-BR",
    page: 1,
  },
});

export default api;
