import React, { useState } from "react";

const CatImage: React.FC = () => {
  const [showCat, setShowCat] = useState(false);

  const handleButtonClick = () => {
    setShowCat(!showCat);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        {showCat ? "Hide Cat" : "Show Cat"}
      </button>
      {showCat && (
        <img src="/IMG_0739.JPG" alt="Cat" style={{ maxWidth: "100%" }} />
      )}
    </div>
  );
};

export default CatImage;
