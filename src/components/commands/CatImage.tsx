import React, { useState } from 'react';

const CatImage: React.FC = () => {
    const [showCat, setShowCat] = useState(false);

    const handleButtonClick = () => {
        setShowCat(!showCat);
    };

    return (
        <div>
            <button onClick={handleButtonClick}>
                {showCat ? 'Hide Cat' : 'Show Cat'}
            </button>
            {showCat && (
                <img
                    src="https://drive.google.com/uc?export=view&id=12_TLck_UyJaPzZSZzHWqOmlTJfpMW5FM"
                    alt="Cat"
                    style={{ maxWidth: "100%" }}
                />
            )}
        </div>
    );
};

export default CatImage;
