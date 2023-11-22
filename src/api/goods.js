//goods (main) 페이지에 들어가는 axios 모듈

//api > goods

import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

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
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}`);
    return res.data.data;
  } catch (error) {
    console.log("getGoods통신오류입니다.", error);
  }
};

//goods 포스트
const postGoods = async (newContent) => {
  const accessToken = Cookies.get("accessToken");
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/content`,
      newContent,
      {
        header: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.message;
  } catch (error) {
    console.log("postGoods통신오류입니다.", error);
  }
};

//goods patch -제품 글 수정
const patchGoods = async ({ id, newContent }) => {
  const accessToken = Cookies.get("accessToken");
  try {
    const res = await axios.patch(
      `${process.env.REACT_APP_SERVER_URL}/${id}/content`,
      newContent,
      {
        header: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.message;
  } catch (error) {
    console.log("patchGoods통신오류입니다.", error);
  }
};

//goods delete - 제품 글 삭제
const deleteGoods = async (id) => {
  const accessToken = Cookies.get("accessToken");
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/${id}/content`,
      {
        header: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.message;
  } catch (error) {
    console.log("deleteGoods통신오류입니다.", error);
  }
};

//like 추가
//goods/:goodsId/like
const addLike = async (id) => {
  const accessToken = Cookies.get("accessToken");
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/${id}/like`,
      {
        header: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.message;
  } catch (error) {
    console.log("addLike error", error);
  }
};

//카트에 저장
const addToCart = async (update) => {
  const accessToken = Cookies.get("accessToken");
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/orders`,
      update,
      {
        header: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.message;
  } catch (error) {
    console.log("addToCart error", error);
  }
};

//상세 정보 글 조회
const readDetail = async (id) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/${id}`);
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
  const accessToken = Cookies.get("accessToken");
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/${id}`,
      addComment,
      {
        header: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.message;
  } catch (error) {
    console.log("addComment error", error);
  }
};

//상세 정보 글 수정  * 오류 null *
const patchComment = async (id) => {
  const accessToken = Cookies.get("accessToken");
  try {
    const res = await axios.patch(
      `${process.env.REACT_APP_SERVER_URL}/${id}`,
      null,
      {
        header: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.message;
  } catch (error) {
    console.log("patchComment error", error);
  }
};

//상세 정보 글 삭제
const deleteComment = async (id) => {
  const accessToken = Cookies.get("accessToken");
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/${id}`,
      {
        header: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.message;
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
};
