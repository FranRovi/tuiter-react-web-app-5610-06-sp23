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
    "liked": true,
    "replies": 897,
    "retuits": 789,
    "likes": 987,
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
                state.unshift({
                    _id: (new Date()).getTime(),
                    ...action.payload,
                    ...templateTuit,
                    description: action.payload.tuit,
                })
            },
            likeTuit(state, action) {
                const tuit = state.find(tuit => tuit._id === action.payload.singleTuitId);

                switch(action.payload.type) {
                    case 'LIKE_TUIT':
                        tuit.likes--;
                        tuit.liked = false;
                        break;

                    case 'UNLIKE_TUIT':
                        tuit.likes++;
                        tuit.liked = true;
                        break;

                    default:
                        return state;

                }
            },
        },
    }
);


export const { createTuit, deleteTuit, likeTuit } = tuitsSlice.actions; 
export default tuitsSlice.reducer;