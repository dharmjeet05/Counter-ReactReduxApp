import React from "react";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "./redux/counterReducer";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React and Redux</h4>

        <div className="quantity">
          <a
            className="quantity__minus"
            title="Decrement"
            onClick={() => dispatch(decrementByAmount(8))}
          >
            <span>-8</span>
          </a>
          <a
            className="quantity__minus"
            title="Decrement"
            onClick={() => dispatch(decrementByAmount(5))}
          >
            <span>-5</span>
          </a>
          <a
            className="quantity__minus"
            title="Decrement"
            onClick={() => dispatch(decrement())}
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity__input"
            value={count}
          />
          <a
            className="quantity__plus"
            title="Increment"
            onClick={() => dispatch(increment())}
          >
            <span>+</span>
          </a>
          <a
            className="quantity__plus"
            title="Increment"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            <span>+5</span>
          </a>
          <a
            className="quantity__plus"
            title="Increment"
            onClick={() => dispatch(incrementByAmount(8))}
          >
            <span>+8</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
