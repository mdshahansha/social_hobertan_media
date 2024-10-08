import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/post.actions';

const DeleteCard = (props) => {
  const dispatch = useDispatch();
  const deleteQuote = () => {
    dispatch(deletePost(props.id))
  }
  return (
    <div onClick={() => {
      if (window.confirm("Do you want to delete this article?")) {
        deleteQuote();
      }
    }}>
      <img src='./img/icons/trash.svg' alt='trash' />
    </div>
  );
};

export default DeleteCard;
