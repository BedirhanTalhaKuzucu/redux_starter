import axios from "axios";
import { setLoading, clearLoading } from "../actions/appActions";
import { setNewsList } from "../actions/newsActions";


const url =
    "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
    "from=2022-04-18&" +
    "sortBy=popularity&" +
    "apiKey=eb148e87ab3444f184fa3a9b9c408285";

export const getNews = async (dispatch) => {
    try {
        dispatch(setLoading());
        const { data } = await axios.get(url);
        dispatch(setNewsList(data.articles));
    } catch (error) {
        console.log(error);
    } finally {
        dispatch(clearLoading());
    }
};