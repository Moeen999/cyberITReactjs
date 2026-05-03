import styled from "styled-components";

const StyledButton = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center gap-2 fixed inset-0 bg-gray-800/40">
      <button
        style={{
          backgroundColor: "#372114",
          padding: "9px 12px",
          color: "white",
        }}
      >
        Click Me
      </button>

      <IamStyledButton>I am Stylish boy</IamStyledButton>

      {/* Same btton styling with tailwind css */}
      <button className="bg-amber-900 h-10 px-3 py-6 text-white">
        Tailwind Button
      </button>

      <div className="w-8 h-8 border-2 rounded-full  border-amber-600 border-t-white animate-spin ">

      </div>
    </div>
  );
};

const IamStyledButton = styled.button`
  background-color: #372114;
  padding: 9px 12px;
  color: white;
`;

export default StyledButton;
