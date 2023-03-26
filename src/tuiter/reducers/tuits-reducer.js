import { createSlice } from '@reduxjs/toolkit';
import tuits from '../tuits/tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "userIcon": "../../images/web_dev_nasa_logo.png",
};

const templateTuit = {
    ...currentUser,
    "description": "Space",
    "time": "2h",
    "liked": false,
    "replies": 100,
    "retuits": 100,
    "likes": 100,
}
   
const tuitsSlice = createSlice(
    {
        name: 'tuits',
        initialState: tuits,
        reducers: {
            deleteTuit(state, action){
                const index = state.findIndex(tuit => tuit._id === action.payload);
                state.splice(index, 1);
            },
            createTuit(state, action){
                console.log(action.payload);
                state.unshift({
                    _id: (new Date()).getTime(),
                    ...action.payload,
                    ...templateTuit,
                    description: action.payload.tuit,
                })
            },
            findTuit(state, action) {
                console.log(action.payload);
                const index = state.findIndex(tuit => tuit._id === action.payload);
                console.log(index);
            },
        },
    }
);


export const { createTuit, deleteTuit, findTuit } = tuitsSlice.actions; 
export default tuitsSlice.reducer;