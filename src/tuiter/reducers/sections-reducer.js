import { createSlice } from '@reduxjs/toolkit';
import sectionsArray from '../data/sections.json';

const sectionsSlice = createSlice(
    {
        name: 'sections',
        initialState: sectionsArray
    }
);

export default sectionsSlice.reducer;