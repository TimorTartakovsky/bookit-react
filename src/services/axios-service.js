import axios from 'axios';
import authService from './auth-service';
import * as urlParams from '../consts/request-const';

class AxiosService {

    axiosInstance = {};

    constructor() {
        this.initInstance();
    }

    initInstance() {
        this.axiosInstance = axios.create({
            baseURL: urlParams.API_VERSION,
            timeout: 1000,
        });
        this.axiosInstance.interceptors.request.use(
            (config) => {
                const token = authService.getToken();
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            }
        );
        return this.axiosInstance;
    }

    getInstance() {
        return this.axiosInstance || this.initInstance();
    }
}

export default new AxiosService();