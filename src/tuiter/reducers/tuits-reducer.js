import { createSlice } from '@reduxjs/toolkit';
// import tuits from '../tuits/tuits.json';
import { deleteTuitThunk, findTuitsThunk, createTuitThunk, updateTuitThunk } from '../../services/tuits-thunks';

const initialState = {
    tuits: [],
    loading: false
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]: (state) => {
            state.loading = true;
            state.tuits = [];
        },
        [findTuitsThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.tuits = payload;
        },
        [findTuitsThunk.rejected]: (state, action) => {
            state.loading = false;
            state.tuits = action.error;
        },
        [deleteTuitThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.tuits = state.tuits.filter(tuit=> tuit._id !== payload);
        },
        [createTuitThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.tuits.push(payload);
        },
        [updateTuitThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            const tuitIdx = state.tuits.findIndex(tuit => tuit._id === payload.id);
            state.tuits[tuitIdx] = {...state.tuits[tuitIdx], ...payload }
        },
    },
    
    reducers: {}
    
})

// const currentUser = {
//     "userName": "NASA",
//     "handle": "@nasa",
//     "userIcon": "../../images/web_dev_nasa_logo.png",
// };

// const templateTuit = {
//     ...currentUser,
//     "description": "Space",
//     "time": "2h",
//     "liked": true,
//     "replies": 897,
//     "retuits": 789,
//     "likes": 987,
// }
   
// const tuitsSlice = createSlice(
//     {
//         name: 'tuits',
//         initialState: tuits,
//         reducers: {
//             deleteTuit(state, action){
//                 const index = state.findIndex(tuit => tuit._id === action.payload);
//                 state.splice(index, 1);
//             },
//             createTuit(state, action){
//                 state.unshift({
//                     _id: (new Date()).getTime(),
//                     ...action.payload,
//                     ...templateTuit,
//                     description: action.payload.tuit,
//                 })
//             },
//             likeTuit(state, action) {
//                 const tuit = state.find(tuit => tuit._id === action.payload.singleTuitId);

//                 switch(action.payload.type) {
//                     case 'LIKE_TUIT':
//                         tuit.likes--;
//                         tuit.liked = false;
//                         break;

//                     case 'UNLIKE_TUIT':
//                         tuit.likes++;
//                         tuit.liked = true;
//                         break;

//                     default:
//                         return state;

//                 }
//             },
//         },
//     }
// );


export const { createTuit, deleteTuit, likeTuit } = tuitsSlice.actions; 
export default tuitsSlice.reducer;