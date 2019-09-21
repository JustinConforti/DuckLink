import axios from "axios";

export default {

    getUser: () => { 
        return axios.get("/api/users");
    },

    getUserid: id => { 
        return axios.get(`/api/users/${id}`); 
    },

    registerUser: userData => { 
        return axios.post(`/api/register`, userData);
    }

}
