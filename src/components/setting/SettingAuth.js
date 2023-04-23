import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editUser,
  signUpUser,
  selectProfileList,
  saveUser,
} from "../../data/store/profileListSlice";
import { useNavigate } from "react-router-dom";
import Toast from "../atomic/Toast";
import AuthForm from "../auth/AuthForm";
import SettingListView from "./SettingListView";
import Button from "../atomic/Button";

const AddProfile = () => {
  const dispatch = useDispatch();
  const profileList = useSelector(selectProfileList);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [openAddProfileForm, setOpenAddProfileForm] = useState(false);

  const handleLogOut = () => {
    changeIsLoggedIn();
    navigate("/");
  };

  const changeIsLoggedIn = () => {
    const loggedInUser = profileList.filter((user) => user.isLoggedIn === true);
    dispatch(editUser({ name: loggedInUser[0].name, isLoggedIn: false }));
    dispatch(saveUser());
  };

  const handleAddProfile = () => {
    if (!profileList.some((user) => user.name === userName)) {
      changeIsLoggedIn();
      dispatch(signUpUser({ name: userName, isLoggedIn: true }));
      dispatch(saveUser());
      navigate("/home");
    } else {
      return (
        <Toast
          title="실패"
          message="이미 가지고 있는 별명입니다. 새로운 별명을 입력하세요!"
        />
      );
    }
  };

  const addProfilePropsData = {
    userName,
    buttonText: "추가하기",
    title: "프로필을 추가하실건가요?",
    handleInputChange: (e) => setUserName(e.target.value),
    handleFormBtnClick: () => handleAddProfile(),
  };

  return (
    <>
      <SettingListView listText="로그아웃" onClick={() => handleLogOut()} />
      <SettingListView
        listText="프로필추가생성"
        onClick={() => setOpenAddProfileForm(true)}
      />
      {openAddProfileForm && (
        <div className="absolute top-1/3 left-1/2 border-2 border-black bg-white">
          <Button
            type="button"
            text="닫기"
            onClick={() => setOpenAddProfileForm(false)}
          />
          <AuthForm {...addProfilePropsData} />
        </div>
      )}
    </>
  );
};

export default AddProfile;
