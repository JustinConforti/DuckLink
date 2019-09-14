import axios from "axios";

export default {

    getUser: () => { 
        return axios.get("/api/users");
    },

    getBook: id => { 
        return axios.get(`/api/users/${id}`); 
    },

    saveUser: userData => { 
        return axios.post(`/api/users`, userData);
    }

}
