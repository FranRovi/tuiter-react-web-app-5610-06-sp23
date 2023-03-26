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
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}
   

const tuitsSlice = createSlice(
    {
        name: 'tuits',
        initialState: tuits,
        reducers: {
            deleteTuit(state, action){
                console.log(action);
                const index = state.findIndex(tuit => tuit._id === action.payload);
                console.log(action.payload); 
                state.splice(index, 1);
            },
            createTuit(state, action){
                console.log(action.payload);
                state.unshift({
                    ...action.payload,
                    ...templateTuit,
                    description: action.payload.tuit,
                    _id: (new Date()).getTime(),
                })
            },
            findTuit(state, action) {
                console.log(action);
                const index = state.findIndex(tuit => tuit._id === action.payload);
                console.log(index);
            },
        },
    }
);


export const { createTuit, deleteTuit, findTuit, toogleLike, updateCounter } = tuitsSlice.actions; 
export default tuitsSlice.reducer;