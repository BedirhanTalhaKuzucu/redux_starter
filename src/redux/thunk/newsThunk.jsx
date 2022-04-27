import axios from "axios";
import { setLoading, clearLoading } from "../actions/appActions";
import { setNewsList } from "../actions/newsActions";


const url =
    "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
    "from=2022-04-18&" +
    "sortBy=popularity&" +
    "apiKey=1a1a999e0d7240a6bd2dead87bcca78e";

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