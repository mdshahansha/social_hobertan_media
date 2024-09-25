import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeftNav from '../LeftNav';
import UploadImg from './UploadImg';
import { updateBio } from '../../actions/user.actions';
import { dateParser } from "../Utils";
import FollowHandler from './FollowHandler';


const UpdateProfile = () => {
  const userData = useSelector((state) => state.userReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const error = useSelector((state) => state.errorReducer.userError)
  const [bio, setBio] = useState(userData.bio);
  const [updateForm, setUpdateForm] = useState(false);
  const [followingPopup, setFollowingPopup] = useState(false);
  const [followersPopup, setFollowersPopup] = useState(false);
  const dispatch = useDispatch();


  const handleUpdate = () => {
    dispatch(updateBio(userData._id, bio));
    setUpdateForm(false);
  }

  return (
    <div className='profil-container'>
      <LeftNav />
      <h1>Profil of {userData.pseudo}</h1>
      <div className='update-container'>
        <div className='left-part'>
          <h3>Profile Picture</h3>
          <img src={userData.picture} alt="user-pic" />
          <UploadImg />
          <p>{error.maxSize}</p>
          <p>{error.format}</p>
        </div>
        <div className="right-part">
          <div className="bio-update">
            <h3>Bio</h3>
            {updateForm === false && (
              <>
                <p onClick={() => setUpdateForm(!updateForm)}>{userData.bio}</p>
                <button onClick={() => setUpdateForm(!updateForm)}>Modifier bio</button>
              </>
            )}
            {updateForm && (
              <>
                <textarea
                  type="text"
                  defaultValue={userData.bio}
                  onChange={(e) => setBio(e.target.value)}>
                </textarea>
                <button onClick={handleUpdate}>Validate changes
                </button>
              </>
            )}
          </div>
          <h4>Member since  : {dateParser(userData.createdAt)}</h4>
          <h5 onClick={() => setFollowingPopup(true)}>
          Subscriptions : {userData.following ? userData.following.length : '0'}
          </h5>
          <h5 onClick={() => setFollowersPopup(true)}>
          Subscribers : {userData.followers ? userData.followers.length : '0'}
          </h5>
        </div>
      </div>
      {followingPopup && (
        <div className="popup-profil-container">
          <div className="modal">
            <h3>Subscriptions</h3>
            <span className='cross' onClick={() => setFollowingPopup(false)}>&#10005;</span>
            <ul>
              {usersData.map((user) => {
                for (let i = 0; i < userData.following.length; i++) {
                  if (user._id === userData.following[i]) {
                    return (
                      <li key={user._id}>
                        <img src={user.picture} alt='user-pic' />
                        <h4>{user.pseudo}</h4>
                        <div className='follow-handler'>
                          <FollowHandler idToFollow={user._id} type={'suggestion'} />
                        </div>
                      </li>
                    );
                  }
                }
                return null
              })}
            </ul>
          </div>
        </div>
      )}
      {followersPopup && (
        <div className="popup-profil-container">
          <div className="modal">
            <h3>Abonnés</h3>
            <span className='cross' onClick={() => setFollowersPopup(false)}>&#10005;</span>
            <ul>
              {usersData.map((user) => {
                for (let i = 0; i < userData.followers.length; i++) {
                  if (user._id === userData.followers[i]) {
                    return (
                      <li key={user._id}>
                        <img src={user.picture} alt='user-pic' />
                        <h4>{user.pseudo}</h4>
                        <div className='follow-handler'>
                          <FollowHandler idToFollow={user._id} type={'suggestion'} />
                        </div>
                      </li>
                    );
                  };
                }
                return null
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProfile;
