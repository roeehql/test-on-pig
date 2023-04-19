import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserList,
  selectProfileList,
} from "../../data/store/profileListSlice";
import { USERNAME } from "../../data/browserStorage/keys.constant";

const ProfileList = () => {
  const profileList = useSelector(selectProfileList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserList(USERNAME));
  }, []);

  return (
    <ul className="flex flex-row justify-center items-center w-fit h-20 bg-black">
      {profileList.map((user) => (
        <li
          key={user.name}
          className="px-1 py-2 text-base tracking-tight text-white cursor-pointer"
        >
          {user.isLoggedIn ? (
            <span className="px-2 py-1 rounded-lg bg-stone tracking-tighter text-red">
              {user.name}
            </span>
          ) : (
            <span className="px-2 py-1 rounded-lg bg-stone tracking-tighter">
              {user.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProfileList;
