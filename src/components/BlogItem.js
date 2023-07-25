import { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

import BlogMenu from './BlogMenu';
import moment from 'moment';
import Edit from '../assets/edit.png';
import Delete from '../assets/delete.png';
import classes from './BlogItem.module.scss';

const BlogItem = (props) => {
  const [blog, setBlog] = useState({});
  //console.log(blog);

  const location = useLocation();
  const navigate = useNavigate();

  const blogId = location.pathname.split('/')[2];

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/blogs/${blogId}`
        );
        const responseData = response.data[0];

        setBlog(responseData);
      } catch (err) {
        return err;
      }
    };
    fetchData();
  }, [blogId]);

  const handleDelete = async () => {
    try {
      await axios.delete('/blogs/{blogId}');
      navigate('/');
    } catch (err) {
      return err;
    }
  };

  // const [{ blog_title, blog_content, blog_image }] = data;
  return (
    <>
      <div className={classes.single}>
        <div className={classes['single-blog']}>
          <img src={blog.blog_image} style={{ width: '500px' }} alt='' />
          <div className={classes.member}>
            {/* <img
              src='https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
              alt=''
            /> */}
            <div className={classes['member-info']}>
              <span>{blog.username}</span>
              <p>Posted {moment(blog.date).fromNow()}</p>
            </div>
            {currentUser.other.username === blog.username && (
              <div className={classes['edit-blog']}>
                <Link to={`write?edit=2`}>
                  <img src={Edit} alt='' />
                </Link>
                <img src={Delete} alt='' onClick={handleDelete} />
              </div>
            )}
          </div>
          <h1>{blog.blog_title}</h1>
          <p>{blog.blog_content}</p>
        </div>
        <BlogMenu />
      </div>
    </>
  );
};

export default BlogItem;
