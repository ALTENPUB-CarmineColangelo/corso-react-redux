import { useDispatch, useSelector } from 'react-redux';
import { actionUsers } from '../redux-config/actions/usersActions';
import { selectorUsersList, selectorUsersLoading } from '../redux-config/selectors/usersSelectors';
import classes from './UserProfile.module.css';
import { User } from './User'
import { Route, Link } from 'react-router-dom';

const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectorUsersList);
  const loading = useSelector(selectorUsersLoading);

  const getUsers = () => {
    dispatch(actionUsers.request());
  }

  return (
    <>
      <main className={classes.profile}>
        <h2>Users</h2>
        <button onClick={getUsers}>Richiedi users</button>
        {loading && 'Richiesta utenti in corso...'}
        {users.map(user => (<div>
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
          </div>))}
      </main>      
    </>
  );
};

export default Users;
