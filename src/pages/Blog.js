import { Link } from 'react-router-dom';

const BLOG_POSTS = [
  {
    blogId: 1,
    blogName: 'Blog Name 1',
    blogContent: 'Blog content',
  },
  {
    blogId: 2,
    blogName: 'Blog Name 2',
    blogContent: 'Blog content',
  },
  {
    blogId: 3,
    blogName: 'Blog Name 3',
    blogContent: 'Blog content',
  },
];

const BlogPage = () => {
  return (
    <div>
      {BLOG_POSTS.map((blog) => (
        <div>
          <ul>
            <li key={blog.blogId}>
              <Link to={`blog${blog.blogId}`}>{blog.blogName}</Link>
            </li>
          </ul>
          <p>{blog.blogContent}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
