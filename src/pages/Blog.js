import { json, useLoaderData, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import classes from './Blog.module.scss';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/blogs');
        console.log(response);

        const responseData = response.data;

        let loadedBlogs = [];

        for (const key in responseData) {
          loadedBlogs.push({
            blog_id: responseData[key].blog_id,
            blog_title: responseData[key].blog_title,
            blog_content: responseData[key].blog_content,
            blog_image: responseData[key].blog_image,
            date: responseData[key].date,
          });
          console.log(loadedBlogs);

          setBlogs(loadedBlogs);
        }
      } catch (err) {
        return err;
      }
    };
    fetchData();
  }, []);

  //const handleBlogDetail = () => {};
  return (
    <div className={classes.blogs}>
      {blogs.map((blog) => (
        <div className={classes.blog} key={blog.blog_id}>
          <div className={classes['blog-img']}>
            <img src={`../upload/${blog?.blog_image}`} alt='' />
          </div>
          <div className={classes.container}>
            <h1>{blog.blog_title}</h1>

            <p className={classes['blog-content']}>{blog.blog_content}</p>
            <Link to={`${blog.blog_id}`} className={classes['blog-link']}>
              <button className={classes['blog-button']}>Read More</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;

// export const blogLoader = async () => {
//   const response = await fetch('http://localhost:8080/blogs');

//   if (!response.ok) {
//     throw json({ message: 'Could not fetch blogs' }, { status: 500 });
//   } else {
//     const responseData = await response.json();
//     return responseData;
//   }
// };
