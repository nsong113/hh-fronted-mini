import React, { useEffect, useState } from "react";
import * as ST from "./style";
import { getGoods } from "../../api/goods";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router";
import { addLike, checkUserType } from "../../api/goods";

const Item = ({ filteredItem, onClickFilterHandler, isSuccess, isLoading }) => {
  const navigate = useNavigate();
  //userType 확인
  const [userType, setUserType] = useState("BUYER");

  const { data } = useQuery("checkUserType", checkUserType);

  useEffect(() => {
    if (data === "SELLER") {
      setUserType("SELLER");
    }
  }, [data]);

  //디테일 페이지로 이동하기 => state값 id로 주기 (useLocation)
  const goToDetailHandler = (id) => {
    navigate(`/goods/${id}`, { state: { id } });
  };

  //addLike Mutation
  const addLikeMutation = useMutation("getGoods", addLike);

  //addLike Mutation 사용   => * 쿠키 에러 *
  const addLikeHandler = (e, id) => {
    e.stopPropagation();
    addLikeMutation.mutate(id);
  };

  //수정으로 가기
  const onClickModifyHandler = (e, id) => {
    e.stopPropagation();
    navigate(`/goods/content`, { state: { id } });
  };

  return (
    <>
      {!isLoading &&
        isSuccess &&
        filteredItem.map((item) => {
          return (
            <ST.GoodsItemsDiv
              key={item.id}
              onClick={() => goToDetailHandler(item.goodsId)}
            >
              <div>
                <ST.GoodsImgDiv
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                ></ST.GoodsImgDiv>

                <ST.GoodsItemInfoBoxDiv>
                  <div className="GoodsItemInfoDiv">
                    <h6>{item.goodsName}</h6>
                    <h4>{item.price}</h4>
                    <p onClick={(e) => addLikeHandler(e, item.goodsId)}>
                      🩷 {item.likeCount}{" "}
                    </p>
                  </div>
                  {userType === "SELLER" && (
                    <ST.GoodsItemEditBtn
                      onClick={(e) => onClickModifyHandler(e, item.goodsId)}
                    >
                      수정
                    </ST.GoodsItemEditBtn>
                  )}
                </ST.GoodsItemInfoBoxDiv>
              </div>
            </ST.GoodsItemsDiv>
          );
        })}
    </>
  );
};

export default Item;
