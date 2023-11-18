import React from "react";
import * as ST from "./style";
import { getGoods } from "../../api/goods";
import { useQuery } from "react-query";

const Item = () => {
  const { isLoading, isError, data: goods } = useQuery("getGoods", getGoods);

  if (isLoading) {
    console.log("goods로딩중입니다.");
  }
  if (isError) {
    console.log("goods에러입니다. ");
  }

  return (
    <>
      {goods?.map((item) => {
        return (
          <ST.GoodsItemsDiv key={item.goodsId}>
            <div>
              <ST.GoodsImgDiv
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              ></ST.GoodsImgDiv>

              <ST.GoodsItemInfoBoxDiv>
                <div className="GoodsItemInfoDiv">
                  <h6>{item.goodsName}</h6>
                  <h4>{item.price}</h4>
                  <p>🩷 {item.like} </p>
                </div>
                <ST.GoodsItemEditBtn>수정</ST.GoodsItemEditBtn>
                <div></div>
              </ST.GoodsItemInfoBoxDiv>
            </div>
          </ST.GoodsItemsDiv>
        );
      })}
    </>
  );
};

export default Item;
