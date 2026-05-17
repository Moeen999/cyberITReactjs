import { useState } from "react";

const infoArr = [
  { name: "testing name 1", age: 20 },
  { name: "testing name 2", age: 21 },
  { name: "testing name 3", age: 22 },
  { name: "testing name 4", age: 23 },
  { name: "testing name 5", age: 24 },
];

const StateQuestion = () => {
  const [info, setInfo] = useState(infoArr);

  return (
    <div>
      {info.map(({ name, age }) => (
        <h1>
          {name} is {age} years old.
        </h1>
      ))}
    </div>
  );
};

export default StateQuestion;
