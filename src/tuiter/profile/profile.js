import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './index.css';

const ProfileComponent = () => {
    const navigate = useNavigate();
    const { profile } = useSelector(state => state.profile);
    console.log(profile);

    const backClickHandler = () => {
        navigate('/tuiter')
        //console.log("go back");
    }
    const editProfileClickHandler = () => {
        navigate('/tuiter/edit')
        //console.log("go back");
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
                        <img src={profile.bannerPicture} width={profile.banner_width} height={profile.banner_height} />
                        <div>
                            <img src={profile.profilePicture} width={profile.profile_width} height={profile.profile_height} className='position-absolute wd-nudge-up col-2'/>
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
                            <p className="col-4 text-muted">{profile.location}</p>
                            <p className="col-4 text-muted">Born: {profile.dateOfBirth}</p>
                            <p className="col-4 text-muted">Joined: {profile.dateJoined}</p>
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