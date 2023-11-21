import React, { useRef, useState } from "react";
import * as ST from "./style";
import { postGoods } from "../../api/goods";
import { useMutation } from "react-query";

const Product = () => {
  const imgRef = useRef();
  const [imgFile, setImgFile] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  const onChangeImgUploadHandler = (e) => {
    const file = e.target.files?.[0];
    // console.log(file);
    const reader = new FileReader();
    // console.log("reader", reader);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
      // if (typeof event.target?.result ==="string") {
      //mutate 보내기
      //   dispatch(addImage(event.target?.result))
      // }
    };
  };

  console.log("imgFile", imgFile);

  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const onChangePriceHandler = (e) => {
    setPrice(e.target.value);
  };
  const onChangeDescHandler = (e) => {
    setDesc(e.target.value);
  };

  //post 보내기
  //현재 postGoods 통신오류 남.. 500 -> 해결
  const boardMutation = useMutation(postGoods, {
    onSuccess: () => {
      console.log("성공하였습니다.");
    },
  });

  const newContent = {
    goodsName: title,
    imageUrl: imgFile,
    price,
    content: desc,
    likeCount: 0,
  };

  const postBoardHandler = () => {
    boardMutation.mutate(newContent);
  };

  return (
    <ST.ProductContainerDiv>
      <h1 className="ProductTitleH1">내 디저트 판매글 올리기</h1>

      <ST.ProductAttatchmentDiv>
        <ST.ProductAttatchInputBox>
          <input
            className="ProductAttatchmentInput"
            type="file"
            // accept="image/*"
            onChange={onChangeImgUploadHandler}
            ref={imgRef}
          />
        </ST.ProductAttatchInputBox>
        <img
          className="ProductAttatchmentImg"
          style={{ backgroundColor: "#999" }}
          src={imgFile ? imgFile : `/main_item.png`}
          alt="프로필 이미지"
        ></img>
      </ST.ProductAttatchmentDiv>
      <ST.ProductInfoContainerDiv>
        <ST.ProductInfoFlexDiv>
          <ST.ProductInfoDiv>
            <ST.ProductDetailDiv>
              <ST.H4>제품명:</ST.H4> &nbsp;&nbsp;
              <input value={title} onChange={onChangeTitleHandler} />
            </ST.ProductDetailDiv>
            <ST.ProductDetailDiv>
              <ST.H4>가격:</ST.H4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input value={price} onChange={onChangePriceHandler} />
            </ST.ProductDetailDiv>
          </ST.ProductInfoDiv>
          <ST.ProductUploadBtn onClick={postBoardHandler}>
            올리기!
          </ST.ProductUploadBtn>
        </ST.ProductInfoFlexDiv>
        <ST.ProductDescDiv>
          <h4>설명</h4>
          <ST.ProductTextarea value={desc} onChange={onChangeDescHandler} />
        </ST.ProductDescDiv>
      </ST.ProductInfoContainerDiv>
    </ST.ProductContainerDiv>
  );
};

export default Product;
