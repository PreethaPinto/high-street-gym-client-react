import { blogLoader } from '../pages/Blog';
import { useState, useEffect } from 'react';

import classes from './BlogMenu.module.scss';

const BlogMenu = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogData = await blogLoader();
        console.log(blogData);
        setBlogs(blogData);
      } catch (err) {
        console.log('Error fetching blogs', Error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className={classes['blog-menu']}>
      <h1>Other blogs you may like</h1>
      {blogs.map((blog) => (
        <div className={classes['blog-post']} key={blog.blog_id}>
          <img src={blog.blog_image} alt='' />
          <h2>{blog.blog_title}</h2>
          <button>Read more</button>
        </div>
      ))}
    </div>
  );
};

export default BlogMenu;
