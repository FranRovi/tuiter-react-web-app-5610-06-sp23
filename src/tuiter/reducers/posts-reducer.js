import { createSlice } from '@reduxjs/toolkit';
//import postsArray from '../home/home-tuits.json';
import postsArray from '../data/posts.json';

const postsSlice = createSlice(
    {
        name: 'posts',
        initialState: postsArray
    }
);

export default postsSlice.reducer;