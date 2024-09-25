import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../Utils";
import FollowHandler from "./FollowHandler";

const FriendHint = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [playOnce, setPlayonce] = useState(true);
  const [friendsHint, setFriendsHint] = useState([]);
  const userData = useSelector((state) => state.userReducer);
  const usersData = useSelector((state) => state.usersReducer);

  useEffect(() => {
    const notFriendList = () => {
      let arr = [];
      usersData.map((user) => {
        if (
          user._id !== userData._id &&
          !user.followers.includes(userData._id)
        ) {
          return arr.push(user._id);
        } else return null;
      });
      arr.sort(() => 0.5 - Math.random());
      if (window.innerHeight > 780) {
        arr.length = 5;
      } else if (window.innerHeight > 720) {
        arr.length = 4;
      } else if (window.innerHeight > 615) {
        arr.length = 3;
      } else if (window.innerHeight > 540) {
        arr.length = 1;
      } else {
        arr.length = 0;
      }
      setFriendsHint(arr);
    };
    if (playOnce && !isEmpty(usersData[0]) && !isEmpty(userData._id)) {
      notFriendList();
      setIsLoading(false);
      setPlayonce(false);
    }
  }, [userData, usersData, playOnce]);
  return (
    <div className="get-friends-container">
      <h4>Suggestions</h4>
      {isLoading ? (
        <div className="icon">
          <i className="fas fa-spinner fa-pulse"></i>
        </div>
      ) : (
        <ul>
          {friendsHint &&
            friendsHint.map((user) => {
              for (let i = 0; i < usersData.length; i++) {
                if (user === usersData[i]._id) {
                  return (
                    <li className="user-hint" key={user}>
                      <img src={usersData[i].picture} alt="user-pic" />
                      <p>{usersData[i].pseudo}</p>
                      <FollowHandler
                        idToFollow={usersData[i]._id}
                        type={"suggestion"}
                      />
                    </li>
                  );
                }
              }
              return null;
            })}
        </ul>
      )}
    </div>
  );
};

export default FriendHint;
