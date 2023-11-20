import React, { useEffect, useState } from "react";
import * as ST from "./style";
import { useNavigate } from "react-router-dom";
import { autorization } from "../../api/goods";
import { useQuery } from "react-query";

const GoodsBanner = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("BUYER");

  //인가는 이런식으로 하는 건가???
  // const { data: autorization } = useQuery("autorization", autorization);

  // useEffect(() => {
  //   if (autorization === "SELLER") {
  //     setUserType("SELLER");
  //   }
  // }, []);

  const onClickUploadHandler = () => {
    navigate("/goods/content");
  };

  return (
    <ST.GoodsBannerDiv>
      <div className="GoodsBannerLeft">
        <h1 className="GoodsBannerH1">
          Welcome to our Bakery & <br /> Dessert Shop!
        </h1>
        <p className="GoodsBannerP">
          Find the most delicious treats available.
        </p>
        {userType === "SELLER" && (
          <ST.GoodsBannerButtonDiv>
            <p className="GoodsBannerButtonP" onClick={onClickUploadHandler}>
              내 디저트 판매글 올리러 가기
            </p>
          </ST.GoodsBannerButtonDiv>
        )}
      </div>
      <ST.GoodsBannerImgBox></ST.GoodsBannerImgBox>
    </ST.GoodsBannerDiv>
  );
};

export default GoodsBanner;
