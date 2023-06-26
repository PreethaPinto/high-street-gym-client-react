import { Outlet } from 'react-router-dom';
import BlogPage from './Blog';

const BlogRootLayout = () => {
  return (
    <div>
      <BlogPage />
    </div>
  );
};

export default BlogRootLayout;
