//goods (main) 페이지에 들어가는 axios 모듈

//api > goods

import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

//유저 확인
const checkUserType = async () => {
  const accessToken = cookies.get("accessToken");
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/checkLoginStatus`,
      {
        header: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    console.log("checkUserType error", error);
  }
};

//usertype 인가
// const authorization = async () => {
//   try {
//     const accessToken = cookies.get("accessToken");
//     const res = await axios.get(
//       `${process.env.REACT_APP_SERVER_URL}/checkLoginStatus`
//     {
//       header: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     }
//     );
//   } catch (error) {
//     console.log("autorization에러입니다", error);
//   }
// };

//goods 조회
const getGoods = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/goods`);
    return res.data.data;
  } catch (error) {
    console.log("getGoods통신오류입니다.", error);
  }
};

//goods 포스트
const postGoods = async (newContent) => {
  const accessToken = cookies.get("accessToken");
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/goods/content`,
      newContent,
      {
        header: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log("postGoods통신오류입니다.", error);
  }
};

//goods patch -제품 글 수정
const patchGoods = async ({ id, newContent }) => {
  const accessToken = cookies.get("accessToken");
  try {
    const res = await axios.patch(
      `${process.env.REACT_APP_SERVER_URL}/goods/${id}/content`,
      newContent,
      {
        header: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log("patchGoods통신오류입니다.", error);
  }
};

//goods delete - 제품 글 삭제
const deleteGoods = async (id) => {
  const accessToken = cookies.get("accessToken");
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/goods/${id}/content`,
      {
        header: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log("deleteGoods통신오류입니다.", error);
  }
};

//like 추가
//goods/:goodsId/like
const addLike = async (id) => {
  const accessToken = cookies.get("accessToken");
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/goods/${id}/like`,
      {
        header: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log("addLike error", error);
  }
};

//카트에 저장
const addToCart = async (update) => {
  const accessToken = cookies.get("accessToken");
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/orders`,
      update,
      {
        header: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log("addToCart error", error);
  }
};

//상세 정보 글 조회
const readDetail = async (id) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/goods/${id}`
    );
    return res.data;
  } catch (error) {
    console.log("readDetail error", error);
  }
};

//댓글 조회
const readComment = async (id) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/${id}`);
    return res.data.data;
  } catch (error) {
    console.log("readComment error", error);
  }
};

//댓글 등록
const plusComment = async ({ id, addComment }) => {
  const accessToken = cookies.get("accessToken");
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/goods/${id}`,
      addComment,
      {
        header: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log("addComment error", error);
  }
};

//상세 정보 글 수정  * 오류 null *
const patchComment = async (id) => {
  const accessToken = cookies.get("accessToken");
  try {
    const res = await axios.patch(
      `${process.env.REACT_APP_SERVER_URL}/goods/${id}`,
      null,
      {
        header: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log("patchComment error", error);
  }
};

//상세 정보 글 삭제
const deleteComment = async (id) => {
  const accessToken = cookies.get("accessToken");
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/goods/${id}`,
      {
        header: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log("deleteComment error", error);
  }
};

export {
  getGoods,
  postGoods,
  addLike,
  addToCart,
  patchGoods,
  deleteGoods,
  readDetail,
  readComment,
  plusComment,
  patchComment,
  deleteComment,
  checkUserType,
};
