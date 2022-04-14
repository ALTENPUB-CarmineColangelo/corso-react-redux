import { useDispatch, useSelector } from 'react-redux';
import { actionUsers } from '../redux-config/actions/usersActions';
import { selectorUsersList, selectorUsersLoading } from '../redux-config/selectors/userSelectors';
import classes from './UserProfile.module.css';

const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectorUsersList);
  const loading = useSelector(selectorUsersLoading);

  const getUsers = () => {
    dispatch(actionUsers.request());
  }

  return (
    <main className={classes.profile}>
      <h2>Users</h2>
      <button onClick={getUsers}>Richiedi users</button>
      {loading && 'Richiesta utenti in corso...'}
      {users.map(user => (<div>{user.name}</div>))}
    </main>
  );
};

export default Users;
