import React, { useState } from "react";
import * as ST from "./style";
import Item from "./Item";
import { useQuery } from "react-query";
import { getGoods } from "../../api/goods";

const Goods = () => {
  const { data: goods } = useQuery("getGoods", getGoods);
  const [filterInput, setFilterInput] = useState("");

  const onClickFilterHandler = () => {
    // const goodsRegex = "";
    // const filteredGoods = goods.filter((a) => {
    //   a.test(goodsRegex);
    // });
  };

  // 이메일 주소 유효성을 검사하는 정규 표현식
  // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // // 테스트할 문자열
  // const emailToTest = "test@example.com";

  // // 정규 표현식을 사용하여 문자열 검사
  // const isEmailValid = emailRegex.test(emailToTest);

  return (
    <ST.Goods>
      <ST.GoodsFilterDiv>
        <p>원하는 정보 바로 찾기:</p>
        <input
          type="text"
          value={filterInput}
          onChange={(e) => {
            setFilterInput(e.target.value);
          }}
        />
        &nbsp; <button onClick={onClickFilterHandler}> 찾기!</button>
      </ST.GoodsFilterDiv>
      <div className="GoodsProductDiv">
        <ST.GoodsTitleDiv>
          <h1>Featured Products</h1>
          <p>Discover our amazing selection of bakery and dessert items.</p>
        </ST.GoodsTitleDiv>

        {/* 각 아이템 컴포넌트 */}
        <ST.GoodsItemFlexBox>
          <Item />
        </ST.GoodsItemFlexBox>
      </div>
    </ST.Goods>
  );
};

export default Goods;
