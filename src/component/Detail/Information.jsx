import React, { useEffect, useState } from "react";
import * as ST from "./style";
import { useLocation } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { getGoods, addToCart } from "../../api/goods";

const Information = () => {
  const { data: items } = useQuery("getGoods", getGoods);
  const { state: item } = useLocation();
  const [quantity, setQuantity] = useState(1);

  console.log("items", items);
  console.log("item", item);

  const fountData = items.find((a) => a.id === item.id);

  console.log("fountData", fountData);

  const onChangeQuantHandler = (e) => {
    setQuantity(e.target.value);
  };

  const addToCartMutation = useMutation(addToCart, {
    onSuccess: () => {
      alert("추가되었습니다.");
    },
  });

  const onClickAddtoCardHandler = () => {
    const update = {
      id: fountData.id,
      quantity,
    };
    console.log("update", update);
    addToCartMutation.mutate(update);
  };

  return (
    <ST.InfoContainer>
      <ST.InfoTitleBox>
        <h1>제품 상세 정보</h1>
        <img
          alt="제품 상세 정보 페이지"
          //이미지가 안뜨고 있음..
          // style={{ backgroundImage: `url(${fountData.imageUrl})` }}
          style={{ backgroundImage: `url(/main_item.png)` }}
        ></img>
      </ST.InfoTitleBox>

      <ST.InfoFlexBox>
        <ST.InfoItemBox>
          <p>제품명 : {fountData.goodsName}</p>
          <p>가격 : {fountData.price}</p>
          수량:{" "}
          <input
            type="number"
            placeholder="1"
            value={quantity}
            onChange={onChangeQuantHandler}
          />
        </ST.InfoItemBox>
        <ST.InfoAddBttn onClick={onClickAddtoCardHandler}>
          장바구니에 담기
        </ST.InfoAddBttn>
      </ST.InfoFlexBox>
    </ST.InfoContainer>
  );
};

export default Information;
