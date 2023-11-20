//goods (main) 페이지에 들어가는 axios 모듈

//api > goods

import axios from "axios";

//usertype 인가
const autorization = async () => {
  try {
    // const accessToken = cookies.get("accessToken");
    // const res = await axios.get(
    //   `${process.env.REACT_APP_SERVER_URL}/checkLoginStatus`
    // {
    //   header: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // }
    // );
  } catch (error) {
    console.log("autorization에러입니다", error);
  }
};

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

//like
//goods/:goodsId/like
const addLike = async (id) => {
  // try {
  //   const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/goods/${id}/like`),{
  //     header:{
  //       Authorization:`Bearer ${accessToken}`
  //     }
  //   }
  // } catch (error) {
  //   console.log("addLike error", error);
  // }
};

export { getGoods, postGoods, autorization, addLike };
