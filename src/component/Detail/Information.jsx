<<<<<<< HEAD
// import React from "react";

// const Information = () => {
//   return (
//     <div>
//       <div>
//         <h1>제품 상세 정보</h1>
//         <img alt="제품 상세 정보 페이지"></img>
//         <div>
//           <div>
//             <p>제품명 : 레드벨벳케이크</p>
//             <p>가격 : 10000원</p>
//             수량: <input type="number" placeholder="1" />
//           </div>
//           <div>장바구니에 담기</div>
//         </div>
//       </div>
//     </div>
//   );
// };
=======
import React, { useEffect, useState } from "react";
import * as ST from "./style";
import { useLocation } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { getGoods, addToCart } from "../../api/goods";
import { readDetail } from "../../api/goods"; ///사용할꺼야?

const Information = () => {
  //수량 state
  const [quantity, setQuantity] = useState(1);

  //goods get 조회
  const { data: items } = useQuery("getGoods", getGoods);

  //클릭한 버튼 아이템의 id
  const { state: item } = useLocation();

  console.log("items", items); //전체 아이템
  console.log("item", item); //클릭한 상품의 id값 {id:1}

  // 클릭한 아이템의 전체 정보
  const fountData = items.find((a) => a.goodsId === item.id);
  console.log("fountData", fountData);

  //수량 핸들러
  const onChangeQuantHandler = (e) => {
    setQuantity(e.target.value);
  };

  //카트에 저장 뮤테이션 생성  =>  => * 쿠키 에러 *
  const addToCartMutation = useMutation(addToCart, {
    onSuccess: () => {
      alert("추가되었습니다.");
    },
  });

  //카트에 저장 뮤테이션 사용
  const onClickAddtoCardHandler = () => {
    const update = {
      id: fountData.goodsId,
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
>>>>>>> 17aded0043a9daa08d48f1b6a47a8b1f1e305542

// export default Information;
