
const DynamicValues = () => {
    function genRandom (){
        let num;
        num = Math.floor(Math.random() * 1000 + 9000);
        return num
    }

  return (
    <div>
      <h1>I am Static: 10</h1>
      <h1>I am Dynamic: {genRandom()}</h1>
    </div>
  )
}

export default DynamicValues
