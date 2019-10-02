import axios from 'axios';
import { apiHost } from '../configure';

class ApiError extends Error { }
const prevJwt = () => JSON.parse(localStorage.getItem('jwt')) || '';

export const productGetAll = async (data) => {
    try {
        return await axios.get(`${apiHost}/api/product`, {
            headers: {
                authorization: `bearer ${prevJwt().token}`,
            },
        });
    } catch (error) {
        const status = error.response.status;
        if (status === 404) throw new ApiError('404');
        throw new ApiError(error.message); 
    } 
};

export const productCreate = async (data) => {
    try {
        return await axios.post(`${apiHost}/api/product/`, data,{
            headers: {
                data: data,
            },
        });
    } catch (error) {
        const status = error.response.status;
        if (status === 404) throw new ApiError('404');
        throw new ApiError(error.message);
    }
};

export const productDelete = async (data) => {
    try {
        return await axios.delete(`${apiHost}/api/product/${data.id}`,data,{
            headers: {
                // authorization: `bearer ${prevJwt().token}`,
                data: data,
            },
        });
    } catch (error) {
        const status = error.response;
        if (status === 404) throw new ApiError('404');
        throw new ApiError(error.message);
    }
};
