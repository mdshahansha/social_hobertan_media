import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment, editComment } from "../../actions/post.actions";
import { UidContext } from '../AppContext';

const EditDelete = ({ comment, postId, }) => {
  const [isAuthor, setIsAuthor] = useState(false);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState('');
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();

    if (text) {
      dispatch(editComment(postId, comment._id, text));
      setText('');
      setEdit(false);
    }
  };

  const handleDelete = () => dispatch(deleteComment(postId, comment._id));

  useEffect(() => {
    const checkAuthor = () => {
      if (uid === comment.commenterId) {
        setIsAuthor(true);
      }
    }
    checkAuthor();
  }, [uid, comment.commenterId]);

  return (
    <div className='edit-comment'>
      {isAuthor && edit === false && (
        <span onClick={() => setEdit(!edit)}>
          <img src="./img/icons/edit.svg" alt="edit-comment" />
        </span>
      )}
      {isAuthor && edit && (
        <form action='' onSubmit={handleEdit}
          className='edit-comment-form'>
          <label htmlFor='text' onClick={() => setEdit(!edit)}>&#10005;</label>
          <br />
          <input type="text" name='text' onChange={(e) => setText(e.target.value)}
            defaultValue={comment.text}
          />
          <br />
          <div className="btn">
            <span onClick={() => {
              if (window.confirm("Do you want to delete this comment?")) {
                handleDelete();
              }
            }}>
              <img src="./img/icons/trash.svg" alt="trash" />
            </span>
            <input type="submit" id="modif" value='Validate the modification' />
          </div>
        </form>
      )}
    </div>
  );
};

export default EditDelete;
