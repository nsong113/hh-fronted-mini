import React from "react";
import * as ST from "./style";
// import { FaBeer } from "react-icons/fa";

const Header = () => {
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
          <p className="HeaderUtilContentP">로그아웃</p>
        </ST.HeaderUtilDiv>
      </ST.HeaderContainerDiv>
    </ST.HeaderBoxDiv>
  );
};

export default Header;
