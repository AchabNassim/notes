import React, { useContext, useState } from "react";
import {Context } from "../NewNote.jsx"

const EditableParag = ({value}) => {
    const {noteObj, setNoteObj} = useContext(Context);
    const [paragText, setparagText] = useState(value !== undefined ? value : "Start by writing here");

    const handleBlur = (e) => {
        const textContent = e.target.textContent;
        setparagText(textContent);
        setNoteObj(prevState => ({
            ...prevState,
            ["content"]: textContent
        }))
    }
    const handleOnClick = (e) => {
        const textContent = e.target.textContent;
        if (textContent == "Start by writing here") {
            e.target.textContent = "";
        }
    }
    
    return (
        <div id="editableParag">
            <p 
                contentEditable suppressContentEditableWarning spellCheck="false" 
                onBlur={handleBlur}
                onClick={handleOnClick}
                className="noteParag"
            >
                {paragText}
            </p>
        </div>
    )
};

export default EditableParag;