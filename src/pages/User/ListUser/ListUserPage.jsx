import React from 'react';
import ActionBar from '../../../components/ActionBar';
import CardUser from '../../../components/CardUser';
import PropTypes from 'prop-types';
import style from './style';

const ListUserPage = ({ usersList, onEditHandler, onDeleteHandler }) => {
  const classes = style();

  return (
    <>
      <div className={classes.container}>
        {usersList.map(user =>
          <CardUser key={user.id}
            name={user.name}
            id={user.id}
            email={user.email}
            onEditClick={() => onEditHandler(user.id)}
            onDeleteClick={() => onDeleteHandler(user.id)} />)}
      </div>
      <ActionBar />
    </>
  );
}

ListUserPage.propTypes = {
  usersList: PropTypes.array.isRequired,
  onEditHandler: PropTypes.func.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
}

export default ListUserPage;