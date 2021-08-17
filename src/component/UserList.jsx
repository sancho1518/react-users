import React from "react";
import {connect} from 'react-redux'
import User from './user';

const UserList = ({ users, deleteUser, editUser }) => {
  const userList = users.map((user) => {
    return (
      <User
        user={user}
        key={user.id}
        deleteUser={deleteUser}
        editUser={editUser}
      />
    );
  });

  return <div className="user-list">{userList}</div>;
};
const mapStateToProsp = (state) => {
  return{
    user: state.users,
  }
}

export default connect(mapStateToProsp)(UserList);