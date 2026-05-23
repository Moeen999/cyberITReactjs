import { useState } from "react";

const ControllednUncontroled = () => {
  const [inputVal, setInputVal] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(inputVal);
    const input = document.querySelector("#input");
    console.log(input.value);
  };
  return (
    <div>
      <h2>Controlled and Uncontrolled </h2>
      <form
        onSubmit={handleFormSubmit}
        className="mt-4 border rounded-md p-4 flex flex-col justify-center items-center gap-3"
      >
        <h3>Controlled</h3>
        <input
          type="text"
          placeholder="Enter something here..."
          className="outline-none border"
          //   value={inputVal}
          //   onChange={(e)=>setInputVal(e.target.value)}
        />
        <button type="submit" className="border border-amber-500 ">
          Submit the form
        </button>
      </form>
    </div>
  );
};

export default ControllednUncontroled;
