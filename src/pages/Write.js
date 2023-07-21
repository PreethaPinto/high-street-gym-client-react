import ReactQuill from 'react-quill';
import { useState } from 'react';

import classes from './Write.module.scss';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  return (
    <div className={classes['write-wrapper']}>
      <div className={classes.write}>
        <div className={classes.content}>
          <input type='text' placeholder='Title' />
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
            <input style={{ display: 'none' }} type='file' name='' id='file' />
            <label htmlFor='file' className={classes.file}>
              Upload Image
            </label>
            <div className={classes.buttons}>
              <button>Save as a draft</button>
              <button>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
