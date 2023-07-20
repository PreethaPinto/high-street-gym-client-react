import { Link } from 'react-router-dom';
import BlogMenu from './BlogMenu';

import Edit from '../assets/edit.png';
import Delete from '../assets/delete.png';
import classes from './BlogItem.module.css';

const BlogItem = ({ data }) => {
  const [{ blog_title, blog_content, blog_image }] = data;
  return (
    <>
      <div className={classes.single}>
        <div className={classes['single-blog']}>
          <img
            src='https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80'
            style={{ width: '500px' }}
            alt=''
          />
          <div className={classes.member}>
            <img
              src='https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
              alt=''
            />
            <div className={classes['member-info']}>
              <span>John</span>
              <p>Posted 2 days ago</p>
            </div>
            <div className={classes['edit-blog']}>
              <Link to={`write?edit=2`}>
                <img src={Edit} alt='' />
              </Link>
              <img src={Delete} alt='' />
            </div>
          </div>
          <h1>{blog_title}</h1>
          <p>{blog_content}</p>
        </div>
        <BlogMenu />
      </div>

      {/* <h3>{blog_title}</h3>
      <p>{blog_content}</p>
      <img src={blog_image} style={{ width: '700px' }} alt='' /> */}
    </>
  );
};

export default BlogItem;
