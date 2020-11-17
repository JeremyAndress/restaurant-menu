import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://159.89.141.15:8030/api/v1/',
    timeout: 5000,
    headers: {'accept': 'application/json'}
});