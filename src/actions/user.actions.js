import axios from "axios";

export const GET_USER = 'GET_USER';
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";

export const GET_USER_ERROR = 'GET_USER_ERROR';

export const getUser = (uid) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/users/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const uploadPicture = (data, id) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/users/upload`, data)
      .then((res) => {
        if (res.data.errors) {
          dispatch({ type: GET_USER_ERROR, payload: res.data.errors })
        } else {
          dispatch({ type: GET_USER_ERROR, payload: '' })
          return axios
            .get(`${process.env.REACT_APP_API_URL}api/users/${id}`)
            .then((res) => {
              dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture })
            })
        }
      })
      .catch((err) => console.log(err))
  }
}

export const updateBio = (userId, bio) => {
  return (dispatch) => {
    return axios({
      method: 'put',
      url: `${process.env.REACT_APP_API_URL}api/users/${userId}`,
      data: { bio }
    })
      .then((res) => {
        dispatch({ type: UPDATE_BIO, payload: bio })
      })
      .catch((err) => console.log(err))
  }
}

export const followUser = (followerId, idToFollow) => {
  return (dispatch) => {
    return axios({
      method: 'patch',
      url: `${process.env.REACT_APP_API_URL}api/users/follow/${followerId}`,
      data: { idToFollow }
    })
      .then((res) => {
        dispatch({ type: FOLLOW_USER, payload: { idToFollow } })
      })
      .catch((err) => console.log(err))
  }
}

export const unfollowUser = (followerId, idToUnfollow) => {
  return (dispatch) => {
    return axios({
      method: 'patch',
      url: `${process.env.REACT_APP_API_URL}api/users/unfollow/${followerId}`,
      data: { idToUnfollow },
    })
      .then((res) => {
        dispatch({ type: UNFOLLOW_USER, payload: { idToUnfollow } });
      })
      .catch((err) => console.log(err));
  };
};
