import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCount } from '../redux-config/actions/countActions';
import { selectorCount } from '../redux-config/selectors/countSelectors';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const counter = useSelector(selectorCount);

  const onChangeAmount = (e) => {
    const num = !isNaN(e.target.value) ? Number(e.target.value) : undefined;
    if (num != null) {
      setAmount(num);
    }
  }

  const incrementHandler = () => {
    dispatch(actionCount.increment(amount));
  }
  
  const decrementHandler = () => {
    dispatch(actionCount.decrement(amount));
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>

      <div>
        <input type="number" value={amount} onChange={onChangeAmount} />
        <hr />
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      
      <button onClick={() => console.log('ciao')}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
