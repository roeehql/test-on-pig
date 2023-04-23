import React from "react";
import PropTypes from "prop-types";

import Input from "../atomic/Input";
import Button from "../atomic/Button";
import Small from "../atomic/Small";

const AuthForm = ({
  userName,
  message,
  buttonText,
  title,
  handleInputChange,
  handleFormBtnClick,
}) => {
  return (
    <div className="px-6 py-9 border-2 border-black bg-white shadow">
      <h1 className="mb-4 tracking-tighter">{title}</h1>
      <div className="h-10">
        {message && (
          <Small message="로그인에 실패했습니다. 별명은 3개까지 만드실 수 있습니다." />
        )}
      </div>
      <Input
        type="text"
        name="username"
        value={userName}
        onChange={handleInputChange}
        placeholder="돼지짱"
        labelText="별명"
        required={true}
        readOnly={false}
      />
      <div className="h-5">
        {userName.length > 15 && (
          <Small message="별명을 15자 이하로 정해주세요." />
        )}
        {userName === "" && <Small message="별명을 입력해주세요." />}
      </div>
      <div className="h-24">
        {userName !== "" && userName.length < 16 && (
          <Button
            type="submit"
            text={buttonText}
            onClick={handleFormBtnClick}
          />
        )}
      </div>
    </div>
  );
};

AuthForm.propTypes = {
  userName: PropTypes.string,
  message: PropTypes.bool,
  buttonText: PropTypes.string,
  title: PropTypes.string,
  handleInputChange: PropTypes.func,
  handleFormBtnClick: PropTypes.func,
};

export default AuthForm;
