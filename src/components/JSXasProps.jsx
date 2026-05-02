const JSXasProps = () => {
  return (
    <div>
      <MainPropsLonga
        title="Pros as JSX"
        desc="ham jsx ko as a prop bhi pass kr sakty hain"
        greeting={
          <div>
            <h2>Hi main hon asal jsx jo as a props pass huaa hon</h2>
          </div>
        }
      >
        <h1>JSX as a Props</h1>
      </MainPropsLonga>
    </div>
  );
};

function MainPropsLonga({ title, desc, greeting, children }) {
  return (
    <div>
      {children}
      <h1>{title}</h1>
      <h3>{desc}</h3>
      <p>{greeting}</p>
    </div>
  );
}

export default JSXasProps;
