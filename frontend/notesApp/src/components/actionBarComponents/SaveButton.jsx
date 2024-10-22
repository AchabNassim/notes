import React, { useContext, useState } from 'react';
import "../css/actionContainer.css";
import {Context} from "../NewNote.jsx"
import saveButtonSvg from "../../assets/svg/actionBar/save.svg";


function SaveButton() {
    const {noteObj, setNoteObj, isNotValid, setIsNotValid} = useContext(Context);

    const handleClick = () => {
        if (!noteObj.header.length || !noteObj.content.length || noteObj.header == "New Note" || noteObj.content == "Start by writing here") {
            setIsNotValid(true);
        } else {
            setNoteObj( prevState => ({
                ...prevState,
                ["saved"]: 1
            }));
        }
    }

    return (
        <div id='saveButton' className='actionContainer' onClick={handleClick}>
            <img src={saveButtonSvg} style={{paddingBottom: "2px"}}></img>
            <span className='actionName'>Save</span>
        </div>
    );
}

export default SaveButton;