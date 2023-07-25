import { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './BlogMenu.module.scss';

const BlogMenu = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:8080/blogs');
        const responseData = response.data;

        let loadedBlogMenu = [];

        for (const key in responseData) {
          loadedBlogMenu.push({
            blog_id: responseData[key].blog_id,
            blog_title: responseData[key].blog_title,
            blog_content: responseData[key].blog_content,
            blog_image: responseData[key].blog_image,
            date: responseData[key].date,
          });
        }

        setBlogs(loadedBlogMenu);
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
