import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
     if(count<=10){
         setCount(count + 1);
        console.log(count);
     }
    }, 1000);
    return ()=> clearInterval(interval);
  }, [count]);

  // setTimeout(() => {
  //     count++;
  //     console.log(count)
  // }, 1000);
  return (
    <div>
      <h2>rendered {count}</h2>
    </div>
  );
};

export default UseEffect;
