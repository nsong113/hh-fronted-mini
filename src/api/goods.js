//goods (main) 페이지에 들어가는 axios 모듈

//api > goods

import axios from "axios";

//goods 조회
const getGoods = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/goodsItem`
    );
    console.log(res.data);

    return res.data;
  } catch (error) {
    console.log("getGoods통신오류입니다.", error);
  }
};

//goods 포스트
//나중에 goodsItem -> content로 바꾸기
const postGoods = async (newContent) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/goodsItem`,
      newContent
    );
    console.log(res.data);
    // return res.data;
  } catch (error) {
    console.log("postGoods통신오류입니다.", error);
  }
};

export { getGoods, postGoods };
