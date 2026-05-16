const EventPropaation = () => {
  const handleGrandParentClick = () => {
    console.log("Grand Parent Clicked");
  };
  const handleParentClick = () => {

    console.log("Parent Clicked");
  };
  const handleChildClick = (e) => {
    e.stopPropagation(); // ye method event ko stop kr deta hai, iska matlab ye hai ki jab hum child element pe click karte hain to wo event parent element pe nahi jata hai, aur grand parent element pe bhi nahi jata hai.
    console.log("Child Clicked");
  };

//   react main by default jo phase hai wo bubbling phase hota hai, iska matlab ye hai ki jab hum kisi element pe click karte hain to wo event sabse pehle us element pe trigger hota hai, phir uske parent element pe, phir uske grandparent element pe, aur aise hi upar tak jata hai.
  return (
    <div className="w-full min-h-screen flex justify-center items-center">

    <div
      className="grand-parent border-2 border-red-500 p-4 h-64 w-64 flex justify-center items-center" 
      onClickCapture={handleGrandParentClick}
    >
      <div
        className="parent border-2 border-green-500 p-4 h-60 w-60 flex justify-center items-center"
        onClickCapture={handleParentClick}
      >
        <button
          className="child border-2 border-blue-500 p-4"
          onClickCapture={handleChildClick}
          >
          Click Me
        </button>
      </div>
    </div>
            </div>
  );
};

export default EventPropaation;
