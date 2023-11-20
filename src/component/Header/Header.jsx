import React from "react";
import * as ST from "./style";
import { LuDessert } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const onClickHomeHandler = () => {
    navigate("/goods");
  };

  const onClickUploadHandler = () => {
    navigate("/goods/content");
  };

  const handleLogout = () => {
    navigate('/goods');
    console.log("Navigating to '/goods'");
  };

  return (
    <ST.HeaderBoxDiv>
      <ST.HeaderContainerDiv>
        <ST.HeaderFlexDiv>
          <LuDessert style={{ fontSize: "40px" }} onClick={onClickHomeHandler} />
          <ST.HeaderTitleH1>Dessert Shop</ST.HeaderTitleH1>
        </ST.HeaderFlexDiv>
        <ST.HeaderUtilDiv>
          <p className="HeaderUtilContentP" onClick={onClickUploadHandler}>
            판매글 올리기
          </p>
          <p className="HeaderUtilContentP">My Page</p>
          {/* <p className="HeaderUtilContentP" onClick={handleLogin}>
            로그인
          </p> */}
          <p className="HeaderUtilContentP" onClick={handleLogout}>
            로그아웃
          </p>
        </ST.HeaderUtilDiv>
      </ST.HeaderContainerDiv>
    </ST.HeaderBoxDiv>
  );
};

export default Header;
