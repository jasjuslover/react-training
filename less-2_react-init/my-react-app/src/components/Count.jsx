import React, {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import Heading from "./Heading";
import LevelProvider from "../contexts/LevelContext";
import { CounterContext } from "../contexts/CounterContext";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../reducers/counter.slice";

let functionChanged = 0;

const initialState = {
  count: 0,
  loading: false,
};

const actions = {
  UPDATE_COUNT: "update_count",
  SET_LOADING: "set_loading",
};

const countReducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_COUNT:
      const { count, loading } = action.payload;
      return {
        ...state,
        count,
        loading,
      };
    case actions.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

const Counter = () => {
  // const [loading, setLoading] = useState(false);

  // const incrementCounter = useCallback(() => {
  //   setCount((prevCount) => prevCount + 1);
  // }, []);

  //   useEffect(() => {
  //     functionChanged++;
  //     console.log("Count changed:", functionChanged);
  //   }, [incrementCounter]);

  // const [state, dispatch] = useReducer(countReducer, initialState);
  // const { count, loading } = state;
  // console.log("ini state", { count, loading });

  // const delay = (ms) => {
  //   return new Promise((resolve) => {
  //     setTimeout(resolve, ms);
  //   });
  // };

  // const incrementCounter = async () => {
  //   dispatch({ type: actions.SET_LOADING, payload: true });
  //   await delay(2000);
  //   dispatch({
  //     type: actions.UPDATE_COUNT,
  //     payload: { count: count + 1, loading: false },
  //   });
  // };

  // const testDelay = async () => {
  //   await delay(3000);
  //   console.log("print delay");
  // };

  // useEffect(() => {
  //   testDelay();
  // }, []);

  // const { count, setCount } = useContext(CounterContext);

  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  return (
    <div>
      <h1>Counter</h1>
      <p>{count || "0"}</p>
      <button
        onClick={() => {
          // if (setCount) setCount(count + 1);
          dispatch(increment());
        }}
      >
        Increment
      </button>
      {/* <LevelProvider level={1}>
        <Heading>Counter</Heading>

        <LevelProvider level={2}>
          <Heading>Counter</Heading>
          <Heading>Counter</Heading>
          <Heading>Counter</Heading>
        </LevelProvider>

        <LevelProvider level={3}>
          <Heading>Counter</Heading>
          <Heading>Counter</Heading>
        </LevelProvider>
      </LevelProvider> */}

      {/* <Heading level={4}>Counter</Heading>
      <Heading level={5}>Counter</Heading>
      <Heading level={6}>Counter</Heading> */}
    </div>
  );
};

export default Counter;
