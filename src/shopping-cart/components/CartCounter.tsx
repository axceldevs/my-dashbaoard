"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, resetCount, substractOne, initCounterState } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface CartCounterProps {
    initialCount?: number;
}

interface CounterResponse{
  method: string,
  count: number
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch("/api/counter")
  .then(res => res.json())
  .catch(error => console.log({error}));
  return data
};


export const CartCounter = ({ initialCount = 0 }: CartCounterProps) => {

  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  /*useEffect(() => {
    dispatch(initCounterState(initialCount));
  }, [dispatch, initialCount]);*/

  useEffect(() => {
    getApiCounter()
    .then(({count}) => dispatch(initCounterState(count)));
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex items-center gap-2">
        <button
          className="px-4 py-2 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700"
          onClick={() => dispatch(addOne())}
        >
          + 1
        </button>

        <button
          className="px-4 py-2 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700"
          onClick={() => dispatch(substractOne())}
        >
          - 1
        </button>
      </div>
      <div
        className="mt-10 p-4 border border-dashed border-gray-300 rounded-md text-center text-gray-500"
        style={{ maxWidth: "400px" }}
      >
        <p className="mb-2">
          This is a simple counter page. Click the button above to increment the
          counter.
        </p>
        <p>
          You can customize this page further by adding more features or styling
          as needed.
        </p>
      </div>
    </>
  );
};
