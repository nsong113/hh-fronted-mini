import React, { useEffect, useState } from "react";
import * as ST from "./style";
import { getGoods } from "../../api/goods";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router";
import { addLike } from "../../api/goods";

const Item = ({ filteredItem, onClickFilterHandler }) => {
  // const {
  //   isLoading,
  //   isError,
  //   data: goods,
  //   isSuccess,
  // } = useQuery("getGoods", getGoods);
  // const [filteredGoods, setFilteredGoods] = useState([]);
  const navigate = useNavigate();

  //첫 렌더링 시 전체 goods 보여주기 //뒤로가기&홈버튼 클릭시 전체 로딩이 안됨.
  // useEffect(() => {
  //   goods && setFilteredGoods(goods); // 수정 // or  isSuccess가 true일 때만 얘를 바꿔줄수도
  // }, [goods]);

  // console.log("filteredGoods", filteredGoods);
  // console.log("goods", goods);

  //필터 될 때 필터된 goods 보여주기
  // useEffect(() => {
  //   filteredItem && setFilteredGoods(filteredItem);
  // }, [filteredItem]);

  // if (isLoading) {
  //   console.log("goods로딩중입니다.");
  // }
  // if (isError) {
  //   console.log("goods에러입니다. ");
  // }

  const goToDetailHandler = (id) => {
    navigate(`/goods/${id}`, { state: { id } });
  };

  //addLike Mutation
  useMutation("getGoods", addLike);

  //addLike Mutation 사용
  const addLikeHandler = (id) => {};

  return (
    <>
      {filteredItem.map((item) => {
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
                  <p onClick={() => addLikeHandler(item.id)}>
                    🩷 {item.likeCount}{" "}
                  </p>
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
