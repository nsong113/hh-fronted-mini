import React from "react";

const Information = () => {
  return (
    <div>
      <div>
        <h1>제품 상세 정보</h1>
        <img alt="제품 상세 정보 페이지"></img>
        <div>
          <div>
            <p>제품명 : 레드벨벳케이크</p>
            <p>가격 : 10000원</p>
            수량: <input type="number" placeholder="1" />
          </div>
          <div>장바구니에 담기</div>
        </div>
      </div>
    </div>
  );
};

export default Information;
