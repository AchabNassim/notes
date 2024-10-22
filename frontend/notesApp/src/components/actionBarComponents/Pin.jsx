import React, { useState, useContext } from 'react';
import "../css/actionContainer.css";
import { Context } from "../NewNote.jsx"
import pinSvg from "../../assets/svg/actionBar/pin.svg";


function Pin() {
    const {noteObj, setNoteObj} = useContext(Context);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        setNoteObj( prevState => ({
            ...prevState,
            ["isPinned"]: prevState.isPinned ? 0 : 1
        }));
    };

    return (
        <div id='pinContainer' className={`actionContainer ${isClicked ? "actionClicked" : ""}`} onClick={handleClick}>
            <img src={pinSvg} style={{paddingBottom: "2px"}}></img>
            <span className={'actionName'}>Pin</span>
        </div>
    );
}

export default Pin;