import axios from 'axios';
const TUITS_API = 'http://localhost:4000/api/tuits';
//const TUITS_API ="https://franrovi-tuiter-node-server-app-5610-06.onrender.com/api/tuits"
//const API_BASE = process.env.REACT_APP_API_BASE;
//const TUITS_API = `${API_BASE}/tuits`;

export const findAllTuits = async () => {
    const response = await axios.get(TUITS_API);
    // return response.data; 
    const tuits = response.data;
    return tuits;
}

export const findTuitById = async (tid) => {
    const response = await axios.get(`${TUITS_API}/${tid}`);
    return response.data;
}

export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`);
    return response.data;
}

export const createTuit = async (tuit) => {
    //return await axios.post(TUITS_API, tuit);
    const response = await axios.post(TUITS_API, tuit);
    return response.data;
}

export const updateTuit = async (tuit) => {
    const response = await axios.put(`${TUITS_API}/${tuit.id}`, tuit);
    return response;
}