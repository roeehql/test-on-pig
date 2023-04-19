import React, { useState } from "react";
import Input from "../atomic/Input";
import Button from "../atomic/Button";
import Toast from "../atomic/Toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUser, signUpUser } from "../../data/store/profileListSlice";

const AuthForm = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    if (validateUserName()) {
      return handleLogin() ? navigate("/home") : false;
    } else return false;
  };

  const validateUserName = () => {
    return userName === "" || userName.length > 15 ? false : true;
  };

  const handleLogin = () => {
    dispatch(signUpUser({ name: userName, isLoggedIn: true }));
    dispatch(saveUser());
    return <Toast title="실패" message="로그인을 다시 시도해주세요." />;
  };

  return (
    <div className="px-6 py-9 rounded-lg shadow">
      <h1 className="mb-4 tracking-tighter">별명을 입력하고 입장하세요!</h1>
      <Input
        type="text"
        name="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="돼지짱"
        labelText="별명"
        required={true}
        readOnly={false}
      />
      <div className="h-5">
        {userName.length > 15 && (
          <small className="w-full h-fit text-sm text-red">
            별명은 15자 이하로 정해주세요.
          </small>
        )}
        {userName === "" && (
          <small className="w-full h-fit text-sm text-red">
            별명을 입력해주세요.
          </small>
        )}
      </div>
      <div className="h-24">
        {userName !== "" && userName.length < 16 && (
          <Button
            type="submit"
            text="입장하기"
            onClick={() => handleLoginClick()}
          />
        )}
      </div>
    </div>
  );
};

export default AuthForm;
