import React, { useState } from "react";

const ColeDermott: React.FC = () => {
  const [ShowCole, setShowCole] = useState(false);

  const handleButtonClick = () => {
    setShowCole(!ShowCole);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        {ShowCole ? "Hide Resume" : "Show Resume"}
      </button>
      {ShowCole && (
        <img src="/RESUME.jpg" alt="Resume" style={{ maxWidth: "100%" }} />
      )}
    </div>
  );
};

export default ColeDermott;
