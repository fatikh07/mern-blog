import React from "react";
import { RegisterBg } from "../../../assets";
import "./blogItem.scss";
import { Button, Gap } from "../../atoms";
import { useHistory } from "react-router-dom";

const BlogItem = () => {
  const history = useHistory();

  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date Post</p>
        <p className="body">
          Lorem ipsum dolor adoh mboh aa a a a a a aaaaa a aaa aaaaaaaaaaaa
          aaaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaa
        </p>
        <Gap height={20} />
        <Button
          title="View Detail"
          onClick={() => history.push("/detail-blog")}
        />
      </div>
    </div>
  );
};

export default BlogItem;
