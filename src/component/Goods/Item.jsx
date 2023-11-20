import React, { useEffect, useState } from "react";
import * as ST from "./style";
import { getGoods } from "../../api/goods";
import { useQuery } from "react-query";
import { useNavigate } from "react-router";

const Item = ({ filteredItem, onClickFilterHandler }) => {
  const { isLoading, isError, data: goods } = useQuery("getGoods", getGoods);
  const [filteredGoods, setFilteredGoods] = useState([]);
  const navigate = useNavigate();

  //첫 렌더링 시 전체 goods 보여주기 //뒤로가기&홈버튼 클릭시 전체 로딩이 안됨.
  useEffect(() => {
    setFilteredGoods(goods);
  }, [goods]);

  useEffect(() => {
    setFilteredGoods(goods);
  }, []);

  //필터 될 때 필터된 goods 보여주기
  useEffect(() => {
    filteredItem && setFilteredGoods(filteredItem);
  }, [filteredItem]);

  if (isLoading) {
    console.log("goods로딩중입니다.");
  }
  if (isError) {
    console.log("goods에러입니다. ");
  }

  const goToDetailHandler = (id) => {
    navigate(`/goods/${id}`);
  };

  return (
    <>
      {filteredGoods.map((item) => {
        return (
          <ST.GoodsItemsDiv
            key={item.id}
            onClick={() => goToDetailHandler(item.id)}
          >
            <div>
              <ST.GoodsImgDiv
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              ></ST.GoodsImgDiv>

              <ST.GoodsItemInfoBoxDiv>
                <div className="GoodsItemInfoDiv">
                  <h6>{item.goodsName}</h6>
                  <h4>{item.price}</h4>
                  <p>🩷 {item.likeCount} </p>
                </div>
                <ST.GoodsItemEditBtn>수정</ST.GoodsItemEditBtn>
              </ST.GoodsItemInfoBoxDiv>
            </div>
          </ST.GoodsItemsDiv>
        );
      })}
    </>
  );
};

export default Item;
