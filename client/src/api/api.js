import axios from 'axios';

const apiUrl = 'https://furniture-shop-backend.onrender.com/';

export const singleFileUpload = async (data, options) => {
    try {
        await axios.post(apiUrl + 'singleFile', data, options);
    } catch (error) {
        throw error;
    }
}
export const getSingleFiles = async () => {
    try {
        const { data } = await axios.get(apiUrl + 'getSingleFiles');
        return data;
    } catch (error) {
        throw error;
    }
}

export const multipleFilesUpload = async (data, options) => {
    try {
        await axios.post(apiUrl + 'multipleFiles', data, options);
    } catch (error) {
        throw error;
    }
}
export const getMultipleFiles = async () => {
    try {
        const { data } = await axios.get(apiUrl + 'getMultipleFiles');
        return data;
    } catch (error) {
        throw error;
    }
}