import { useState } from "react";

const SohrtCircuitEval = () => {
  // &&
  // ||
  // !==
  let value = 20;

  return (
    <div>
      <h2>{value >= 20 ? "Truthy" : "Falsy"}</h2>
      {value > 21 && <h2>Truthy q k value hai </h2>}
    </div>
  );
};

export default SohrtCircuitEval;


