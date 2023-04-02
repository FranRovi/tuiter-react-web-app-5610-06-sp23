import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from './tuits-service';

export const findAllTuitsThunk = createAsyncThunk(
    'tuits/findAllTuits', async () => {
        return await service.findAllTuits()
    }
);

export const findTuitByIdThunk = createAsyncThunk(
    'tuits/findTuitById', async (tuitId) => {
        const singleTuit = await service.findTuitById(tuitId)
        return singleTuit;
    }
); 

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit', async (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId;
    }
);

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit', async (tuit) => {
        const newTuit = await service.createTuit(tuit)
        return newTuit; 
    }
);

export const updateTuitThunk = createAsyncThunk(
    'tuits/updateTuit', async (tuit) => {
        await service.updateTuit(tuit);
        return tuit; 
    }
);