import axios from "axios";

export default {

    myData: () => { 
        return axios.get("/api/myData");
    },

    getUserid: id => { 
        return axios.get(`/api/users/${id}`); 
    },

    loginUser: (userData) => {
        return axios.post('/api/login', userData)
    },

    registerUser: userData => { 
        return axios.post(`/api/register`, userData);
    },

    logoutUser: () => {
        return axios.post('/api/logout')
    }

};
