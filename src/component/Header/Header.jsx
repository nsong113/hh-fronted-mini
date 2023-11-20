import React from "react";
import * as ST from "./style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  console.log("Logout link clicked");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/goods');
    console.log("Navigating to '/goods'");
  };
  
  // const handleLogin = () => {
  //   navigate('/goods'); 
  //   console.log("Navigating to '/goods'");
  // };
  

  return (
    <ST.HeaderBoxDiv>
      <ST.HeaderContainerDiv>
        <ST.HeaderFlexDiv>
          {/* <icon></icon> */}
          <ST.HeaderTitleH1>Dessert Shop</ST.HeaderTitleH1>
        </ST.HeaderFlexDiv>
        <ST.HeaderUtilDiv>
          <p className="HeaderUtilContentP">판매글 올리기</p>
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
