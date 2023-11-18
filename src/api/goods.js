//goods (main) 페이지에 들어가는 axios 모듈
import axios from "axios";

//goods 조회
const getGoods = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_MOCK_SERVER}/goods`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("getGoods통신오류입니다.", error);
  }
};

export { getGoods };
