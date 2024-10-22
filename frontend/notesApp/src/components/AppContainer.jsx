import React, {useState, useEffect, useContext, createContext} from "react";
import NewNote from "./NewNote";
import Note from "./Note";
import NotesContainer from "./MiniatureNotesContainer";
import NoteData from "../NoteClass";
import CategoriesContainer from "./CategoriesContainer";
import { Context } from '../App.jsx';


export const notesContext = createContext();

const AppContainer = () => {
    const [notes, setNotes] = useState([]);
    const [isCreateMode, setIsCreateMode] = useState(true);
    const [isEditMode, setIsEditMode] = useState(false);
    const [chosenCategory, setChosenCategory] = useState("default");
    const [chosenNote, setChosenNote] = useState(notes[notes.length - 1]);
    const {isLogged, setIsLogged} = useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/notes", {
                    credentials: "include"
                });
                const data = await response.json();
                if (data.length > 0) {
                    setNotes(data);
                }
            } catch (e) {
                console.error(e);
            }
        }
        if (isLogged) {
            fetchData();
        }
    }, [isLogged])

    const sendDataToParent = (newNote) => {
        const note_ = {...newNote, saved: false};
        if (isCreateMode) {
            setNotes((notes) => [note_, ...notes]);
            localStorage.setItem('notes', JSON.stringify([note_, ...notes]));
            setChosenNote(note_);
            setIsCreateMode(false);
        } else if (isEditMode) {
            setNotes((notes) => 
                notes.map(note => note.id === newNote.id ? note_ : note)
            );
            setChosenNote(note_);
            setIsEditMode(false);
        }
        fetch("http://localhost:3000/update", {
            credentials: "include",
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(isCreateMode ? [note_, ...notes] : notes.map(note => note.id === newNote.id ? note_ : note))
        })
    }

    const deleteNote = (note_) => {
        const newNotes = notes.filter(note => note.id != note_.id);
        setNotes(newNotes);
        localStorage.setItem('notes', JSON.stringify([...newNotes]));
        if (notes.length > 0)
            setChosenNote(notes[notes.length - 1]);
        fetch("http://localhost:3000/update", {
            credentials: "include",
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify([...newNotes])
        })
    }

    return (
        <notesContext.Provider
            value={{chosenCategory, chosenNote, setChosenCategory, setChosenNote, isCreateMode, setIsCreateMode, isEditMode, setIsEditMode}}
            >
            <div id="appContainer">
                <div style={{flex: '2'}} className="scrollableDiv categoriesContainer">
                    <CategoriesContainer></CategoriesContainer>
                </div>
                <div style={{flex: '3'}} className="scrollableDiv NotesContainer">
                    <NotesContainer notes={notes} category={chosenCategory}></NotesContainer>
                </div>
                <div
                    style={{height: "100%", width: "2px", backgroundColor: "#BEC0C1"}}
                >
                </div>
                <div style={{flex: '9'}} className="scrollableDiv NoteContainer">
                {isCreateMode === true || isEditMode === true ? 
                    <NewNote sendNoteToParent={sendDataToParent} isEditMode={isEditMode} chosenNote={chosenNote}></NewNote> :
                    <Note noteObj={notes[notes.length - 1]} deleteNote={deleteNote}></Note>
                }
                </div>
            </div>
        </notesContext.Provider>
    )
}

export default AppContainer;