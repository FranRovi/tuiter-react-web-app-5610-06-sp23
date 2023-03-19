import { createSlice } from '@reduxjs/toolkit';

// import profile from '../data/profile.json';
// console.log(profile);

const initialState = {
    profile: {
        "firstName": "Francisco",
        "lastName": "Rovirosa",
        "handle": "@franrovi",
        "profilePicture": "../../images/web_dev_avatar-icon-2.jpeg",
        "profile_width": 70,
        "profile_height": 70,
        "bannerPicture": "../../images/web_dev_banner.jpeg",
        "banner_width": "100%",
        "banner_height": 200,
        "bio": "Software Developer with background in law. Currently enroll at Northeastern University Align program in CS.",
        "website": "youtube.com/webdevtv",
        "location": "Redwood City, CA",
        "dateOfBirth": "Dec 1, 1984",
        "dateJoined": "July, 2016",
        "tweets": "7,914", 
        "followingCount": 340,
        "followersCount": 223
    }
} 

const profileSlice = createSlice(
    {
        name: 'profile',
        initialState: initialState,
        reducers:{
            updateProfile: (state, action) => {
                state.profile = action.payload;
            },
        }
    }
);

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;