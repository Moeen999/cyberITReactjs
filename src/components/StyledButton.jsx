import styled from "styled-components";

const StyledButton = () => {
  return (
    <div>
      <button style={{
        backgroundColor: "#372114",
        padding:"9px 12px",
        color:"white",
      }}>Click Me</button>

      <IamStyledButton>I am Stylish boy</IamStyledButton>
    </div>
  )
}


const IamStyledButton = styled.button`
  background-color: #372114;
  padding: 9px 12px;
  color: white;
`;

export default StyledButton
