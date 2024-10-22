import React, {useContext, useState} from "react";
import MiniatureNote from "./MiniatureNote.jsx"
import NotesContainerBar from "./MiniatureNotesContainerBar.jsx";
import NoteData from "../NoteClass.js";
import emptyBackground from "../assets/svg/general/empty.svg"


const displayNotes = (notes, category, condition) => {
    const [isSelectedIndex, setIsSelectedIndex] = useState(-1);
    const filteredNotes = notes.filter((note) => condition(note, category));
    return filteredNotes.length > 0 ? (
            filteredNotes.sort((a, b) => b.isPinned - a.isPinned)
            .map((note, index) => (
                <MiniatureNote key={index} noteObj={note} index={index} isSelectedIndex={isSelectedIndex} setIsSelectedIndex={setIsSelectedIndex} />
            ))
    ) : (
        <div
            style={{
                background: `url(${emptyBackground})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom right",
                height: "100%",
                width: "100%"
            }}
        >
        </div>
    );
}

const isSameCategory = (note, category) => {
    return (note.category === category && note.isArchived !== 1);
}

const isToday = (note) => {
    const date = NoteData.createCurrentDate();
    return (note.date == date && note.isArchived !== 1);
}

const isArchived = (note) => {
    return (note.isArchived === 1);
}

const isDefault = (note) => {
    return (note.isArchived !== 1);
}

const NotesContainer = ({notes, category = "default"}) => {
    const renderNotes = () => {
        if (!notes || notes.length < 1) {
            return (null);
        }
        else if (category !== "default" && category !== "Today" && category !== "Archive") {
            return displayNotes(notes, category, isSameCategory)
        } else if (category == "Today") {
            return displayNotes(notes, category, isToday);
        } else if (category == "Archive") {
            return displayNotes(notes, category, isArchived);
        } else {
            return (displayNotes(notes, category, isDefault));
        }
    }

    return (
        <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
            <NotesContainerBar></NotesContainerBar>
            {renderNotes()}
        </div>
    )
}

export default NotesContainer;