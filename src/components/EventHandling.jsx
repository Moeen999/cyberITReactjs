const EventHandling = () => {
  const handleEvent = () => {
    alert("Event Triggered");
  };

  //   handleInputChange
  //   handleButtonClick
  //   handleMouseMove
  const handleInputChange = (e) => {
    console.log(e.target);
  };
  return (
    <div>
      <button
        onClick={(e) => console.log(e.target)}
        // onClick={handleEvent}
      >
        Click Me
      </button>

      <input
        type="text"
        onChange={(e) => handleInputChange(e)}
        placeholder="Enter kuch bhi"
      />
    </div>
  );
};

export default EventHandling;
