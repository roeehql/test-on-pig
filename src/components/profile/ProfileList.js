import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editUser,
  getUserList,
  saveUser,
  selectProfileList,
} from "../../data/store/profileListSlice";
import { USERNAME } from "../../data/browserStorage/keys.constant";

const ProfileList = () => {
  const profileList = useSelector(selectProfileList);
  const dispatch = useDispatch();

  const handleProfileChange = (e) => {
    dispatch(editUser({ name: getCurrentUser(), isLoggedIn: false }));
    dispatch(saveUser());
    dispatch(editUser({ name: e.target.innerText, isLoggedIn: true }));
    dispatch(saveUser());
  };

  const getCurrentUser = () => {
    const user = profileList.filter((user) => user.isLoggedIn === true);
    return user[0].name;
  };

  useEffect(() => {
    dispatch(getUserList(USERNAME));
  }, [dispatch]);

  return (
    <ul className="flex flex-row justify-center items-center w-fit h-20 bg-black">
      {profileList.map((user) => (
        <li
          key={user.name}
          className="px-1 py-2 text-base tracking-tight text-white cursor-pointer"
        >
          {user.isLoggedIn ? (
            <button className="px-2 py-1 border-2 border-black bg-white tracking-tighter text-red">
              ✅{user.name}
            </button>
          ) : (
            <button
              onClick={(e) => handleProfileChange(e)}
              className="px-2 py-1 border-2 border-black bg-stone tracking-tighter cursor-pointer"
            >
              {user.name}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProfileList;
