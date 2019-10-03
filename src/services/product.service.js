import axios from 'axios';
import { apiHost } from '../configure';

class ApiError extends Error { }
const prevJwt = localStorage.getItem('token');

export const productGetAll = async (data) => {
    try {
        return await axios.get(`${apiHost}/api/product`, {
            headers: {
                authorization: `bearer ${prevJwt}`,
            },
        });
    } catch (error) {
        const status = error.response.status;
        if (status === 404) throw new ApiError('404');
        throw new ApiError(error.message); 
    } 
};

export const productCreate = async (data) => {
    console.log();
    try {
        return await axios.post(`${apiHost}/api/product/`, data,{ 
            headers: {
                authorization: `bearer ${prevJwt}`,
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
        return await axios.delete(`${apiHost}/api/product/${data.id}`,{
            headers: {
                authorization: `bearer ${prevJwt}`,
                data: data,
            },
        });
    } catch (error) {
        const status = error.response;
        if (status === 404) throw new ApiError('404');
        throw new ApiError(error.message);
    }
};

export const productEdit = async (data) => {
    console.log(data.id,data);
    //debugger
    try {
        return await axios.put(`${apiHost}/api/product/${data.id}`,data,{
            headers: {
                authorization: `bearer ${prevJwt}`,
                data: data,
            },
        });
    } catch (error) {
        const status = error.response;
        if (status === 404) throw new ApiError('404');
        throw new ApiError(error.message);
    }
};

