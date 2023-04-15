import "./post.css";
import { MoreVert } from "@mui/icons-material";
//import { Users } from "../../dummyData";
import React, { useState } from "react";
// import feedContext from "../../context/feedContext";
export default function Post(props) {
  // const context=useContext(feedContext);

  const { post,userName } = props;


  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like + 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              // src={process.env.PUBLIC_URL + "/user.png"}
              src={userName.pic}
              alt=""
            />
            {/* <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span> */}
            <span className="postDate">{userName.name}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.description}</span>
          {/* <img className="postImg" src={post.photo} alt="" /> */}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={process.env.PUBLIC_URL + "/like.png"}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={process.env.PUBLIC_URL + "/love.png"}
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            {/* <span className="postCommentText">{post.comment} comments</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
