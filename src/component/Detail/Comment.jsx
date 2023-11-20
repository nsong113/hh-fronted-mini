import React from "react";

const Comment = () => {
  return (
    <div className="CommentContainerDiv">
      <h2 className="CommentTitleH2">Comment</h2>
      <div>
        <textarea />
        <div>댓글 입력</div>
      </div>
      <div>
        <div>
          <p>완전 맛있어요!</p>
          <div>
            <button>댓글수정</button>
            <button>댓글삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
