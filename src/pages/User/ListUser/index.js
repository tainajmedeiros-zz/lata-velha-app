import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ListUserPage from './ListUserPage';
import HttpContext from '../../../contexts/HttpContext';
import UserRepository from '../../../api/services/User/UserRepository';
import UserService from '../../../api/services/User/UserService';
import messages from '../messages';

const ListUser = () => {
  const httpClient = useContext(HttpContext);
  const userRepository = UserRepository(httpClient);
  const userService = UserService(userRepository);
  
  // todo: remember to user observable pattern!!!
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    userService.listAll().then(list => {
      setUsersList(list);
    });
  }, []);

  const onEditHandler = (userId) => {
    console.log("ListUserPage-> onEditHandler", userId);
  }

  const onDeleteHandler = async (userId) => {
    try {
      const apiResponse = await userService.remove(userId);
      if (apiResponse) {
        const updateList = await userService.listAll();
        setUsersList(updateList);
        toast.success(messages.successDelete.defaultMessage);
      }
    } catch(err) {
      toast.error(err.message);
    }
  }

  return (
    <ListUserPage usersList={usersList} onEditHandler={onEditHandler} onDeleteHandler={onDeleteHandler} />
  );
};

export default ListUser;

