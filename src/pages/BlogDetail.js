import { useParams } from 'react-router-dom';

const BlogDetailPage = () => {
  const params = useParams();
  return (
    <div>
      <h2>Blog Page</h2>
      <p>{params.blogId}</p>
    </div>
  );
};

export default BlogDetailPage;
