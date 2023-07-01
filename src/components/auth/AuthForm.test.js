import React from "react";
import { render, screen } from "@testing-library/react";
import AuthForm from "./AuthForm";
import userEvent from "@testing-library/user-event";
import Button from "../atomic/Button";

test("userName이 15자 이하이거나 빈문자열이 아닐 시 입장하기 버튼을 보여준다.", () => {
  render(<AuthForm userName="꿀꿀용사" buttonText="입장하기" />);
  const enterButton = screen.getByRole("button");
  expect(enterButton).toBeInTheDocument();
  expect(enterButton).toHaveTextContent("입장하기");
});

test("userName이 빈문자열이면 버튼대신 메세지가 보여진다.", () => {
  render(<AuthForm userName="" />);
  const smallMessage = screen.getByText(/별명을 입력해주세요./);
  expect(smallMessage).toBeInTheDocument();
  expect(smallMessage).toHaveTextContent("별명을 입력해주세요.");
});

test("userName이 15자 이상이면 버튼대신 메세지가 보여진다.", () => {
  render(<AuthForm userName="abcdefghijklmnopqrstuvwxyz" />);
  const smallMessage = screen.getByText(/별명을 15자 이하로 정해주세요./);
  expect(smallMessage).toBeInTheDocument();
  expect(smallMessage).toHaveTextContent("별명을 15자 이하로 정해주세요.");
});

test("입장하기 버튼을 누르면 submit함수가 실행된다.", () => {
  const handleFormBtnClick = jest.fn();
  const user = userEvent.setup();
  render(
    <Button
      type="submit"
      text="입장하기"
      onClick={() => handleFormBtnClick()}
    />
  );
  const enterButton = screen.getByRole("button");
  user.click(enterButton);
  expect(handleFormBtnClick).toHaveBeenCalledTimes(1);
});
