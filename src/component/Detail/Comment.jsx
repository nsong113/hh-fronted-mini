import React, { useState } from "react";
import CommentDetail from "./CommentDetail";
import * as ST from "./style";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addComment } from "../../api/goods";

const Comment = () => {
  const [addComment, setAddcomment] = useState("");
  const onChangeInputHandler = (e) => {
    setAddcomment(e.target.value);
  };

  //조회
  const { data } = useQuery("addComment", addComment);

  //추가
  const queryClient = useQueryClient();
  const addCommentMutation = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("addComment");
      //invalidate
    },
  });

  const onClickAddCommentHandler = (id) => {
    addCommentMutation.mutate({ id, addComment });
  };

  //업데이트

  //삭제

  return (
    <ST.CommentContainerDiv>
      <h2 className="CommentTitleH2" style={{ marginBottom: "30px" }}>
        Comment
      </h2>
      <ST.CommentInputAreaDiv>
        <textarea
          style={{ width: "80%", height: "100px", padding: "20px" }}
          value={addComment}
          placeholder="댓글을 입력하세요"
          onChange={onChangeInputHandler}
        />

        {/* 그리고 나중에 Id바꿔야 할 수도 있음.  */}
        <ST.CommentButton onClick={() => onClickAddCommentHandler(data.id)}>
          댓글추가하기
        </ST.CommentButton>
      </ST.CommentInputAreaDiv>
      <ST.CommentResultContainer>
        {/* <CommentDetail comment={data.Comments.comment} /> */}
      </ST.CommentResultContainer>
    </ST.CommentContainerDiv>
  );
};

export default Comment;
