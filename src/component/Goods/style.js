import { styled } from "styled-components";

//베너스타일링
export const GoodsBannerDiv = styled.div`
  width: 80%;
  height: 70vh;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GoodsBannerButtonDiv = styled.div`
  width: 250px;
  height: 50px;
  background-color: #b8c6d5;
  line-height: 50px;
  text-align: center;
`;

export const GoodsBannerImgBox = styled.div`
  width: 50%;
  height: 60%;
  background-image: url(/main_banner.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

///제품 스타일링

export const Goods = styled.div`
  width: 80%;
  height: 100vh;
  padding: 20px;
  margin: 0 auto 60px auto;
  background-color: #efeaea;
`;

export const GoodsFilterDiv = styled.div`
  width: 100%;
`;

export const GoodsTitleDiv = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

export const GoodsImgDiv = styled.div`
  width: 300px;
  height: 230px;
  background-image: url(/main_item.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const GoodsItemsDiv = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid black;
  padding: 10px;
`;

export const GoodsItemInfoBoxDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px;
  gap: 30px;
`;

export const GoodsItemEditBtn = styled.div`
  width: 70px;
  height: 30px;
  background-color: #b8c6d5;
  line-height: 30px;
  text-align: center;
`;

//각 아이템 컴포넌트
export const GoodsItemFlexBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
