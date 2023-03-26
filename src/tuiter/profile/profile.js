import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsCalendar3 } from "react-icons/bs";
import { IoBalloonOutline } from "react-icons/io5";

import { MdOutlinePlace } from "react-icons/md";
//import { BsCalendar3,  MdOutlinePlace, IoBallonOutline } from "react-icons/ai";
import './index.css';

const ProfileComponent = () => {
    const navigate = useNavigate();
    const { profile } = useSelector(state => state.profile);
    console.log(profile);

    const backClickHandler = () => {
        navigate('/tuiter')
    }
    const editProfileClickHandler = () => {
        navigate('/tuiter/edit')
    }
    return(
        <>
            <h4>Profile</h4>
            <div className='container'>
                <div className='row'>
                    <div className='col-1'>
                        <button className="btn btn-white btn small " onClick={backClickHandler}> &#8592; </button>
                    </div>
                    <div className="col-10">
                        <h5 className="mb-0">{profile.firstName} {profile.lastName}</h5>
                        <p className="text-muted pt-0">{profile.tweets} tweets</p>
                    </div>
                    <div className='position-relative row'>
                        <img src={profile.bannerPicture} width={profile.banner_width} height={profile.banner_height} alt="user's banner background" />
                        <div>
                            <img src={profile.profilePicture} width={profile.profile_width} height={profile.profile_height} alt="user's avatar icon" className='position-absolute wd-nudge-up col-2'/>
                            <button className="position-absolute btn btn-warning wd-slide-r" onClick={editProfileClickHandler}><span className="wd-txt-w">Edit profile</span></button>
                        </div>
                        
                    </div>
                    <div className="col-12 mt-5">
                        <h5 className="mb-0"><span className='fw-bolder'>{profile.firstName} {profile.lastName}</span></h5>
                        <p className="text-muted pt-0">{profile.handle}</p>
                        <p>{profile.bio}</p>
                    </div>
                    <div>
                        <div className='row'>
                            <p className="col-4 text-muted"><MdOutlinePlace/> {profile.location}</p>
                            <p className="col-4 text-muted"><IoBalloonOutline/> Born: {profile.dateOfBirth}</p>
                            <p className="col-4 text-muted"><BsCalendar3/> Joined: {profile.dateJoined}</p>
                        </div>
                        <div className='row'>
                            <p className="col-3"><span className='fw-bolder'>{profile.followingCount}</span> Following</p>
                            <p className="col-3"><span className='fw-bolder'>{profile.followersCount}</span> Followers</p>
                        </div>
                    </div>   
                </div>
            </div>
        </>
    );
}

export default ProfileComponent;