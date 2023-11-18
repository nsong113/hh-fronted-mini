import React from "react";
import * as ST from "./style";

const Goods = () => {
  return (
    <ST.Goods>
      <ST.GoodsFilterDiv>
        <p>원하는 정보 바로 찾기:</p>
        <input type="text" />
      </ST.GoodsFilterDiv>
      <div className="GoodsProductDiv">
        <ST.GoodsTitleDiv>
          <h1>Featured Products</h1>
          <p>Discover our amazing selection of bakery and dessert items.</p>
        </ST.GoodsTitleDiv>

        <ST.GoodsItemsDiv>
          <ST.GoodsImgDiv></ST.GoodsImgDiv>
          <ST.GoodsItemInfoBoxDiv>
            <div className="GoodsItemInfoDiv">
              <h6>Chocolate Brownie</h6>
              <h4>4000 ₩</h4>
              <p>🩷 30 </p>
            </div>
            <ST.GoodsItemEditBtn>수정</ST.GoodsItemEditBtn>
            <div></div>
          </ST.GoodsItemInfoBoxDiv>
        </ST.GoodsItemsDiv>
      </div>
    </ST.Goods>
  );
};

export default Goods;
