const EventsAsProps = () => {
  const salamDUa = (name) => {
    console.log(`Assalamualaikum ${name}`);
  };
  return (
    <div>
      <h1>Events as Props</h1>
      <ChildComponent
        kuchBhi={() => console.log("Button clicked")}
        onInputChange={(e) => salamDUa(e.target.value)}
      />
    </div>
  );
};

const ChildComponent = (props) => {
  const { kuchBhi, onInputChange } = props;
  return (
    <div>
      <button className="p-4 bg-blue-500 text-white rounded" onClick={kuchBhi}>
        Click Me
      </button>
      <input
        type="text"
        onChange={onInputChange}
        placeholder="Enter your name"
      />
    </div>
  );
};

export default EventsAsProps;
