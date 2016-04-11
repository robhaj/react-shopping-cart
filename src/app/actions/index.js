import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

export const fetchData = () => {
    const request = axios.get('src/data/data.json');

    return {
        type: FETCH_DATA,
        payload: request
    }
}
