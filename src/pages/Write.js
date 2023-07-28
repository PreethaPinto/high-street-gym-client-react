import ReactQuill from 'react-quill';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';

import classes from './Write.module.scss';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const state = useLocation().state;
  const toastMessage = classes['toast-message'];

  const [value, setValue] = useState(state?.blog_content || '');
  const [title, setTitle] = useState(state?.blog_title || '');
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post(
        'http://localhost:8080/upload',
        formData
      );
      console.log(response.data);

      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true, // Send cookies with the request
    crossDomain: true, // Treat the request as cross-origin
  });

  const handlePublish = async (e) => {
    e.preventDefault();
    const imageUrl = await upload();

    try {
      state
        ? await axiosInstance.put(`/blogs/${state.blog_id}`, {
            blog_title: title,
            blog_content: value,
            blog_image: file ? imageUrl : '',
          })
        : await axiosInstance.post('/blogs', {
            blog_title: title,
            blog_content: value,
            blog_image: file ? imageUrl : '',
            date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
          });

      toast.success('You are booked in!', {
        position: toast.POSITION.BOTTOM_CENTER,
        className: toastMessage,
      });
      navigate('/');
    } catch (err) {}
  };

  const handleSave = () => {};

  return (
    <div className={classes['write-wrapper']}>
      <div className={classes.write}>
        <div className={classes.content}>
          <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className={classes['editor-container']}>
            <ReactQuill
              className={classes.editor}
              theme='snow'
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
        <div className={classes.menu}>
          <div className={classes.item}>
            <h1>Publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            <input
              style={{ display: 'none' }}
              type='file'
              name=''
              id='file'
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor='file' className={classes.file}>
              Upload Image
            </label>
            <div className={classes.buttons}>
              <button onClick={handleSave}>Save as a draft</button>
              <button onClick={handlePublish}>Publish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
