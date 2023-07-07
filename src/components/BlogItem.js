const BlogItem = ({ data }) => {
  const [{ blog_name, blog_content }] = data;
  return (
    <>
      <h3>{blog_name}</h3>
      <p>{blog_content}</p>
    </>
  );
};

export default BlogItem;
