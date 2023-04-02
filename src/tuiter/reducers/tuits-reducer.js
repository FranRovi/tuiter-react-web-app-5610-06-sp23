import { createSlice } from '@reduxjs/toolkit';
import { deleteTuitThunk, findAllTuitsThunk, findTuitByIdThunk, createTuitThunk, updateTuitThunk } from '../../services/tuits-thunks';

const initialState = {
    tuits: [],
    loading: false
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findAllTuitsThunk.pending]: (state) => {
            state.loading = true;
            state.tuits = [];
        },
        [findAllTuitsThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.tuits = payload;
        },
        [findAllTuitsThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [findTuitByIdThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.tuits = state.tuits.find(tuit=> tuit._id === action.payload);
        },
        [deleteTuitThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.tuits = state.tuits.filter(tuit=> tuit._id !== action.payload);
        },
        [createTuitThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.tuits.push(action.payload);
        },
        [updateTuitThunk.fulfilled]: (state, action ) => {
            state.loading = false;
            // state.tuits = state.tuits.map(tuit => tuit._id === action.payload._id ? action.payload : tuit);
            const tuitIdx = state.tuits.findIndex(tuit=> tuit._id === action.payload._id);
            state.tuits[tuitIdx] = {
                ...state.tuits[tuitIdx],
                ...action.payload
            }
        }, 
    },
    
    reducers: {}
    
})


//export const { createTuit, deleteTuit, likeTuit } = tuitsSlice.actions; 
export default tuitsSlice.reducer;