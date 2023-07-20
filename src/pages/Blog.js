import { json, useLoaderData, Link } from 'react-router-dom';

import classes from './Blog.module.css';

const BlogPage = () => {
  const blogs = useLoaderData();
  console.log(blogs);

  return (
    <div className={classes['blogs-home']}>
      <div className={classes.blogs}>
        {blogs.map((blog) => (
          <div className={classes.blog} key={blog.blog_id}>
            <div className={classes['blog-img']}>
              <img src={blog.blog_image} alt='' />
            </div>
            <div className={classes.container}>
              <Link to={`${blog.blog_id}`} className={classes['blog-link']}>
                <h1 className={classes['blog-title']}>{blog.blog_title}</h1>
              </Link>
              <p className={classes['blog-content']}>{blog.blog_content}</p>
              <button className={classes['blog-button']}>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // return <BlogsList blogs={blogs} />;
};

export default BlogPage;

export const blogLoader = async () => {
  const response = await fetch('http://localhost:8080/blogs');

  if (!response.ok) {
    throw json({ message: 'Could not fetch blogs' }, { status: 500 });
  } else {
    const responseData = await response.json();
    //console.log(responseData);
    return responseData;
  }
};
