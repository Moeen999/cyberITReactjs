import { useState } from "react";

const LiftningStateUp = () => {
  const [inputVal, setInputVal] = useState("");
  return (
    <div className="flex flex-col">
      <Child1Input setInputVal={setInputVal} inputVal={inputVal} />
      <Child2Display inputVal={inputVal} />
    </div>
  );
};

export default LiftningStateUp;

const Child1Input = ({ inputVal, setInputVal }) => {
  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Enter something here...."
        className="border border-pink-300 rounded-md p-4 outline-none"
      />
    </div>
  );
};

const Child2Display = ({ inputVal }) => {
  return (
    <div>
      <h2>{inputVal}</h2>
    </div>
  );
};
