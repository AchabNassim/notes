import React, { useContext, useState } from 'react';
import "../css/actionContainer.css";
import { Context } from "../NewNote.jsx"
import archiveSvg from "../../assets/svg/actionBar/archive.svg";


function Archive() {
    const {noteObj, setNoteObj} = useContext(Context);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        setNoteObj( prevState => ({
            ...prevState,
            ["isArchived"]: prevState.isArchived ? 0 : 1
        }));
    };

    return (
        <div id='archiveContainer' className={`actionContainer ${isClicked ? "actionClicked" : ""}`}  onClick={handleClick}>
            <img src={archiveSvg} style={{paddingBottom: "2px"}}></img>
            <span className='actionName'>Archive</span>
        </div>
    );
}

export default Archive;