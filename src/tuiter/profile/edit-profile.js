import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../reducers/profile-reducer';
import './index.css';

const EditProfileComponent = () => {
    const  { profile } = useSelector(state => state.profile);
    console.log(profile);
    const [userInfo, setUserInfo] = useState(profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const name = profile.firstName + ' ' + profile.lastName;
    const backClickHandler = () => {
        navigate('/tuiter/profile')
    }
    const saveClickHandler = () => {
        console.log(userInfo);
        dispatch(updateProfile(userInfo));
        navigate('/tuiter/profile')
    }
    return(
        <>
            <h4>Edit</h4>
            <div className='container'>
                <div className='row'>
                    <div className='col-1'>
                        <button className="btn btn-white btn small" onClick={backClickHandler}> X </button>
                    </div>
                    <div className="col-9">
                        <p className="">Edit profile</p>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-dark rounded-pill" onClick={saveClickHandler}>Save</button>
                    </div>
                    <div className='position-relative row'>
                        <img src={profile.bannerPicture} width={profile.banner_width} height={profile.banner_height} />
                        <div>
                            <img src={profile.profilePicture} width={profile.profile_width} height={profile.profile_height} className='position-absolute wd-nudge-up col-2'/>
                        </div>
                    </div>
                    <div className="col-12 mt-5">
                        <div className="wd-border mb-4">
                            <label className="text-muted p-1">Name</label><br/>
                            <input className="w-50 wd-no-border p-1" defaultValue={profile.firstName} onChange={
                                (e) => setUserInfo({
                                    ...profile,
                                    firstName: e.target.value,
                                    lastName: e.target.value,
                                })}/>
                            <input className="w-50 wd-no-border p-1 float-flex" defaultValue={profile.lastName} onChange={
                                (e) => setUserInfo({
                                    ...profile,
                                    firstName: e.target.value,
                                    lastName: e.target.value,
                                })}/>
                        </div>
                        <div className="wd-border mb-4">
                            <label className="text-muted p-1">Bio</label>
                            <textarea className="w-100 wd-no-border p-1 wd-word-wrap" defaultValue={profile.bio} onChange={
                                (e) => setUserInfo({
                                    ...profile,
                                    bio: e.target.value,
                                })}>
                            </textarea>
                        </div>
                        <div className="wd-border mb-4">
                            <label className="text-muted p-1">Location</label>
                            <input className="w-100 wd-no-border p-1" defaultValue={profile.location} onChange={
                                (e) => setUserInfo({
                                    ...profile,
                                    location: e.target.value,
                                })
                            }/>
                        </div>
                        <div className="wd-border">
                            <input className="w-100 wd-no-border text-muted p-3 ps-2" defaultValue='Website' onChange={(e) =>         setUserInfo({
                                    ...profile,
                                    website: e.target.value,
                                })
                            }/>
                        </div> 
                    </div>
                    <div>
                        <label className="text-muted mt-3">Birth date &#183; <span className='text-primary'> Edit</span></label>
                        <input className="w-100 wd-no-border" defaultValue={profile.dateOfBirth} onChange={(e) => setUserInfo({
                                    ...profile,
                                    dateOfBirth: e.target.value,
                                })
                            }/>
                    </div>   
                </div>
            </div>
        </>
    )
}

export default EditProfileComponent;