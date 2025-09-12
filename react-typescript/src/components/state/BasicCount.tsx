import { useState } from "react";

const BasicCount = () => {
  const [count, setCount] = useState<number>(0);

  const handleIn = () => {
    setCount((prev) => prev + 1);
  };

  const handleDec = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>BasicCount</h1>
      <div>
        <button onClick={handleIn}>Increase</button>
        {count}
        <button onClick={handleDec}>Decrease</button>
      </div>
    </div>
  );
};

export default BasicCount;
