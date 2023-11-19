import React from "react";
import * as ST from "./style";

const Product = () => {
  return (
    <ST.ProductContainerDiv>
      <h1 className="ProductTitleH1">내 디저트 판매글 올리기</h1>

      <ST.ProductAttatchmentDiv>
        <ST.ProductAttatchInputBox>
          <button>사진 첨부</button> &nbsp;
          <input className="ProductAttatchmentInput" />
        </ST.ProductAttatchInputBox>
        <image
          className="ProductAttatchmentImg"
          style={{ backgroundColor: "#999" }}
        ></image>
      </ST.ProductAttatchmentDiv>
      <ST.ProductInfoContainerDiv>
        <ST.ProductInfoFlexDiv>
          <ST.ProductInfoDiv>
            <ST.ProductDetailDiv>
              <ST.H4>제품명:</ST.H4> &nbsp;&nbsp;
              <input />
            </ST.ProductDetailDiv>
            <ST.ProductDetailDiv>
              <ST.H4>가격:</ST.H4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input />
            </ST.ProductDetailDiv>
          </ST.ProductInfoDiv>
          <ST.ProductUploadBtn>올리기!</ST.ProductUploadBtn>
        </ST.ProductInfoFlexDiv>
        <ST.ProductDescDiv>
          <h4>설명</h4>
          <ST.ProductTextarea />
        </ST.ProductDescDiv>
      </ST.ProductInfoContainerDiv>
    </ST.ProductContainerDiv>
  );
};

export default Product;
