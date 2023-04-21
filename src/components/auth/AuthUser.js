import React, { useState } from "react";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../atomic/Toast";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userList = useSelector(selectProfileList);

  const handleFormBtnClick = () => {
    checkDuplication() ? handleLogin() : handleSignup();
    userList.some((user) => user.isLoggedIn === true) ? (
      navigate("/home")
    ) : (
      <Toast title="실패" message="로그인을 다시 시도해주세요." />
    );
  };

  const checkDuplication = () => {
    dispatch(getUserList(USERNAME));
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

  const signUpPropsData = {
    userName,
    buttonText: "입장하기",
    title: "별명을 입력하고 입장하세요!",
    handleInputChange: (e) => setUserName(e.target.value),
    handleFormBtnClick: () => handleFormBtnClick(),
  };
  return <AuthForm {...signUpPropsData} />;
};

export default AuthUser;
