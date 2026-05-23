import { useState } from "react";

const DerivedStates = () => {
  const [info, setInfo] = useState([
    { name: "testing name 1", age: 20 },
    { name: "testing name 2", age: 21 },
    { name: "testing name 3", age: 22 },
    { name: "testing name 4", age: 23 },
    { name: "testing name 5", age: 24 },
  ]);

  // ! Derived: variable -> assign the value of any state
  const length = info.length;
  // ! Avg Age
  const avgAge =
    info.reduce((accc, currElem) => accc + currElem.age, 0) / length;
  console.log(avgAge);
  return (
    <div>
      <h3>Array Length: {length}</h3>
      <h3>Average Age: {avgAge}</h3>
    </div>
  );
};

export default DerivedStates;
