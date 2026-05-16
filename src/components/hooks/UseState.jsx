// hooks aur states kia hoti hain?
// hooks aur states react ke aise features hain jo humein apne components ke andar dynamic behavior aur interactivity add karne mein madad karte hain. Hooks ek special function hote hain jo functional components ke andar state aur lifecycle features ko use karne ki suvidha dete hain, jabki states ek aise data structure hote hain jo component ke data ko store karte hain aur component ke re-render hone par update hote hain. In dono ka istemal karke hum apne React applications ko zyada interactive aur responsive bana sakte hain.

import { useEffect, useState } from "react";

const UseState = () => {
  //   let val = 0;
  //   const handleButtonClick = () => {
  //     val++;
  //     console.log(val);
  //   };
  const [val, setVal] = useState(0);
  const [name, setName] = useState("Ghareeb Nawaz");
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  const handleButtonClick = () => {
    setVal(() => val + 1);
  };
  return (
    <>
      {isLoading ? (
        <div>
          <h1>Loading....</h1>
        </div>
      ) : (
        <div>
          <div>
            <h1>{val}</h1>
            <h1>{name}</h1>
            <button
              className="p-3 rounded-sm border absolute "
              onClick={handleButtonClick}
            >
              Increment
            </button>
            {arr.map((item, index) => {
              return <h1 key={index}>{item}</h1>;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default UseState;
