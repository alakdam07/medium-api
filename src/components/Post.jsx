import React from "react";

const Post = ({ post }) => {
  const title = post.title;
  const pubDate = post.pubDate;
  const content = post.content;

  function createMarkup() {
    return { __html: content };
  }

  return (
    <div className="post">
      <p>{pubDate}</p>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

export default Post;
