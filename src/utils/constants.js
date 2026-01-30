import http from "../api/http";

const imagePath = http.defaults.baseURL + '/uploads';


const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};


export { imagePath, formatDate };