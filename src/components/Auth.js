import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionAuth } from "../redux-config/actions/authActions";
import { selectorAuthIsAuth, selectorAuthLoading } from '../redux-config/selectors/authSelectors';
import classes from './Auth.module.css';

const Auth = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector(selectorAuthIsAuth);
  const loading = useSelector(selectorAuthLoading);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const loginHandler = () => {
    dispatch(actionAuth.request({
      username,
      password
    }))
  }


  return (
    <main className={classes.auth}>
      <section>
          <div className={classes.control}>
            <label htmlFor='un'>Username</label>
            <input
            type='text'
            id='un'
            value={username}
            onChange={onChangeUsername} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input
            type='password'
            id='password'
            value={password}
            onChange={onChangePassword} />
          </div>
          <button onClick={loginHandler}>Login</button>
          <hr />
          {loading && 'in attesa di risposta...'}
          {isAuth != null && <>
            {isAuth ? 'Autorizzato!' : 'Non autorizzato'}
          </>}
      </section>
    </main>
  );
};

export default Auth;
