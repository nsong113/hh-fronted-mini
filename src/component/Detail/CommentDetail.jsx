import React from "react";
import * as ST from "./style";

const CommentDetail = (comment) => {
  return (
    // 댓글 map 아직 안시킴.
    //css도 map 크기에 따라 달라지게 아직 설정 안함
    <ST.CommentDetailFlexBox>
      <p>{comment}</p>
      <div className="CommentDetailButtonFlexBox">
        <button>댓글수정</button> &nbsp;
        <button>댓글삭제</button>
      </div>
    </ST.CommentDetailFlexBox>
  );
};

export default CommentDetail;
