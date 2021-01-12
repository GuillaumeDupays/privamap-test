import axios from 'axios';

const url = "http://localhost:3000";

export default {
    getElements() {
        return axios.get(`${url}/elements`);
    }
}