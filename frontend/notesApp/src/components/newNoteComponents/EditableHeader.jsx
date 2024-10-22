import React, { useState, useContext } from "react";
import { Context } from "../NewNote.jsx"

const EditableHeader = ({value}) => {
    const [headerText, setHeaderText] = useState(value !== undefined ? value : "New Note")
    const {noteObj, setNoteObj} = useContext(Context);

    const handleBlur = (e) => {
        const value = e.target.textContent;
        if (value.length > 40) {
            alert("Please choose a smaller note name");
        } else {
            setNoteObj( prevState => ({
                ...prevState,
                ["header"]: value
            }));
        }
    }

    const handleOnClick = (e) => {
        const textContent = e.target.textContent;
        if (textContent == "New Note") {
            e.target.textContent = "";
        }
    }

    return (
        <div id="editableHeader">
            <h1 
                contentEditable suppressContentEditableWarning spellCheck="false" 
                onBlur={handleBlur}
                onClick={handleOnClick}
                className="noteHeader"

            >
                {headerText}
            </h1>
        </div>
    )
};

export default EditableHeader;