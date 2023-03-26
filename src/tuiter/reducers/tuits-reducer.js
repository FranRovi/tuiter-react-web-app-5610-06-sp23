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
                console.log("like Tuit REDUCER Function")
                console.log(action.payload);

                switch(action.payload.type) {
                    case 'LIKE_TUIT':
                        console.log("REDUCER LIKE TUIT");
                        console.log(action.payload.singleTuitId);
                        // const index = state.find(tuit => tuit._id === action.payload.singleTuitId);
                        // console.log(index);
                        // console.log(action.payload.singleTuitId);
                        // 1 copy the current state
                        // 2 update toggle the liked attribute
                        // 3 decrement by one the number of likes
                        

                        break;
                    case 'UNLIKE_TUIT':
                        console.log("REDUCER UNLIKE TUIT");
                        console.log(action.payload.singleTuitId);
                        // const index = state.find(tuit => tuit._id === action.payload.singleTuitId);
                        //console.log(action.payload.singleTuitId);
                        // 1 copy the current state
                        // 2 update toggle the liked attribute
                        // 3 incremenet by one the number of likes
                        
                        break;
                    default:
                        return state;

                }

                // if (state.singleTuit.liked) {
                //     state.singleTuit.liked = !state.singleTuit.liked;
                //         state.singleTuit.likes -= 1;
                // } else {
                //     state.singleTuit.liked = !state.singleTuit.liked;
                //         state.singleTuit.likes += 1;
                // }
                // ;
            },
        },
    }
);


export const { createTuit, deleteTuit, likeTuit } = tuitsSlice.actions; 
export default tuitsSlice.reducer;