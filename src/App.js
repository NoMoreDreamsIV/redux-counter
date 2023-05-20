import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/actions';

function App() {
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>   
  );
}

export default App;
