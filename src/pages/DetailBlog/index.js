import React from "react";
import { RegisterBg } from "../../assets";
import "./detailBlog.scss";
import { useHistory } from "react-router-dom";
import { Link, Gap } from "../../components";

const DetailBlog = () => {
  const history = useHistory();

  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem ipsum dolor aaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaa
        aaaaaaaaaa aaaaaaaaaa aaaaaaaaaaa aaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaa
      </p>
      <Gap height={20} />
      <Link title="Kembali ke Home" onClick={() => history.push("/")} />
    </div>
  );
};

export default DetailBlog;
