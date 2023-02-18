import axios from 'axios';
import { GIPHY_API_URL, GIPHY_API_KEY } from '../constants';

export const seacrhGiphy = (querySearch) => axios.get(`${GIPHY_API_URL}/search`, {
    params: {
        api_key: GIPHY_API_KEY,
        q: querySearch
    } 
});

