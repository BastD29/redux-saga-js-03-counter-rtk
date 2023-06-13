import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterState";
import { sagaActions } from "./counterSaga";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  // add 1 with a delay of one second
  const handleIncrement = () => {
    dispatch(sagaActions.incrementAsync());
  };

  // substract 1 with no delay
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;
