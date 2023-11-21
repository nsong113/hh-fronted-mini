import React, { useEffect, useState } from "react";
import * as ST from "./style";
import Item from "./Item";
import { useQuery } from "react-query";
import { getGoods } from "../../api/goods";

const Goods = () => {
  const { data: goods } = useQuery("getGoods", getGoods);

  const [filterInput, setFilterInput] = useState("");
  const [filteredItem, setFilteredItem] = useState([]);

  useEffect(() => {
    goods && setFilteredItem(goods);
  }, [goods]);

  //맨퍼음에 받아오는 axios data값은 무조건 undefined임 . 이거를 컨트롤해줘야함. isSuccess->true일 때 데이터 처리
  const onClickFilterHandler = () => {
    //필터기능
    const filtered = goods.filter((item) => {
      const inputLowerCase = filterInput.toLowerCase();
      return item.goodsName.toLowerCase().includes(inputLowerCase);
    });
    setFilteredItem(filtered);
    // console.log("filtered", filtered);
  };

  console.log("filteredItem", filteredItem);

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
          <Item filteredItem={filteredItem} />
        </ST.GoodsItemFlexBox>
      </div>
    </ST.Goods>
  );
};

export default Goods;
