"use client";
import { useEffect, useState } from "react";

interface CartCounterProps {
    initialCount?: number;
}

export const CartCounter = ({ initialCount = 0 }: CartCounterProps) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);
  
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex items-center gap-2">
        <button
          className="px-4 py-2 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700"
          onClick={() => setCount(count + 1)}
        >
          + 1
        </button>

        <button
          className="px-4 py-2 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700"
          onClick={() => setCount(count - 1)}
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
