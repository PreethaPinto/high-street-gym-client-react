import { Link } from 'react-router-dom';

const BlogsList = ({ blogs }) => {
  const blogsList = blogs.map((blog) => (
    <div>
      <ul>
        <li key={blog.blog_id}>
          <Link to={`blogs${blog.blog_id}`}>{blog.blog_name}</Link>
        </li>
      </ul>
      <p>{blog.blog_content}</p>
    </div>
  ));
  return <>{blogsList}</>;
};

export default BlogsList;
