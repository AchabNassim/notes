import React, { useEffect, useState, createContext } from "react";
import EditableHeader from "./newNoteComponents/EditableHeader";
import EditableParag from "./newNoteComponents/editableParag";
import NoteData from "../NoteClass";
import ActionBar from "./ActionBar";
import "./css/note.css"

export const Context = createContext();

const NewNote = ({sendNoteToParent, isEditMode, chosenNote}) => {
    const [noteObj, setNoteObj] = useState(isEditMode ? chosenNote : new NoteData());
    const [isSaved, setIsSaved] = useState(false);
    const [isNotValid, setIsNotValid] = useState(false);
    
    useEffect(() => {
        if (isNotValid) {
            alert("please enter a note name and some content.");
            setIsNotValid(false);
        }
        if (noteObj.saved === 1 && isSaved === false) {
            setIsSaved(true);
            sendNoteToParent(noteObj);
        }
    }, [noteObj, isNotValid])

    return (
        <Context.Provider value={{noteObj, setNoteObj, isNotValid, setIsNotValid}}>
            <div id="newNote">
                <EditableHeader value={noteObj.header} ></EditableHeader>
                <EditableParag value={noteObj.content} ></EditableParag>
                <ActionBar></ActionBar>
            </div>
        </Context.Provider>
    )
};

export default NewNote;