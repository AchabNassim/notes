import React, { useEffect, useState } from 'react';
import "../css/actionContainer.css";

function Upload({value = "", isSaved, sendDataToParent}) {
    const [imgUrl, setImgUrl] = useState(value);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        setImgUrl(e.target.textContent);
        setIsClicked(!isClicked);
    }

    useEffect(() => {
        if (isSaved) {
            sendDataToParent("imgUrl", imgUrl);
        }
    }, [isSaved]);

    return (
        <div id='uploadContainer' className='actionContainer' onClick={handleClick} >
            <img src="../../assets/svg/actionBar/upload.svg" style={{paddingBottom: "2px"}}></img>
            <span className='actionName'>Upload</span>
        </div>
    );
}

export default Upload;