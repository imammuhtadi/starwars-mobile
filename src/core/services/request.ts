import axios from 'axios';
import { BASE_URL_API } from '../../configs/network';

class Request {
    generateUrl(endpoint: string): string {
        const url = `${BASE_URL_API}${endpoint}`;
        return url;
    }
    async get(endpoint: string) {
        const url = this.generateUrl(endpoint);
        return axios.get(url);
    }
}

export default Request;