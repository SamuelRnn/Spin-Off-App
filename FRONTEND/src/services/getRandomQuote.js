import axios from "axios"

export const getRandomQuote = () => {
    return axios.get("https://movie-quote-api.herokuapp.com/v1/quote/")
      .then(res => res.data)
}