import React, { useState } from "react";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editUser,
  getUserList,
  saveUser,
  selectProfileList,
  signUpUser,
} from "../../data/store/profileListSlice";
import { USERNAME } from "../../data/browserStorage/keys.constant";

const AuthUser = () => {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userList = useSelector(selectProfileList);

  const showMessage = () => {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 3000);
  };

  const checkUsersLength = () => {
    dispatch(getUserList(USERNAME));
    return userList.length < 4 ? true : false;
  };

  const checkDuplication = () => {
    return userList === []
      ? false
      : userList.some((user) => user.name === userName);
  };

  const handleSignup = () => {
    dispatch(signUpUser({ name: userName, isLoggedIn: true }));
    dispatch(saveUser());
    dispatch(getUserList(USERNAME));
  };

  const handleLogin = () => {
    dispatch(editUser({ name: userName, isLoggedIn: true }));
    dispatch(saveUser());
    dispatch(getUserList(USERNAME));
  };

  const handleFormBtnClick = () => {
    if (checkUsersLength()) {
      checkDuplication() ? handleLogin() : handleSignup();
      userList.some((user) => user.isLoggedIn === true)
        ? navigate("/home")
        : showMessage();
    } else {
      showMessage();
    }
  };

  const signUpPropsData = {
    userName,
    message,
    buttonText: "입장하기",
    title: "별명을 입력하고 입장하세요!",
    handleInputChange: (e) => setUserName(e.target.value),
    handleFormBtnClick: () => handleFormBtnClick(),
  };

  return <AuthForm {...signUpPropsData} />;
};

export default AuthUser;
