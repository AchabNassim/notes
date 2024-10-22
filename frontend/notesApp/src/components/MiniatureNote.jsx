import React, { useContext } from "react";
import {notesContext} from "./AppContainer"
import './css/miniatureNote.css'
import dateSvg from "../assets/svg/general/date.svg";

const MiniatureNote = ({noteObj, index, isSelectedIndex, setIsSelectedIndex}) => {
    const {setChosenNote, setIsCreateMode, isCreateMode, isEditMode} = useContext(notesContext);

    const style = {
        display: "flex",
        flexDirection: "column",
        wordWrap: "break-word",
        width: "auto",
        height: "auto",
        marginTop: index !== 0 ? "15px" : "30px",
        padding: "10px",
        paddingBottom: "20px",
        color: "#2E2F30 ",
        borderLeft: noteObj.isPinned ? "6px solid #FFAD5B   " : "6px solid #f9e6d9",
        borderRadius: "8px",
        backgroundColor: index === isSelectedIndex && !isCreateMode && !isEditMode
            ? "rgba(190, 192, 193, 0.35)" // Subtle grey when selected
            : "rgba(240, 240, 240, 0.2)",  // Softer, neutral tone when not selected
        boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.15)", // Cooler, more neutral shadow
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.15))"
    };
    
    
    
    const handleClick = () => {
        setChosenNote(noteObj);
        setIsCreateMode(false);
        setIsSelectedIndex(index);
    }
    return (
        <div style={style} onClick={handleClick} className="miniatureNote">
            <h1 style={{fontSize: "1.150rem"}}>{noteObj.header}</h1>
            <p style={{margin: "10px 0", fontSize: "0.9rem"}}>{noteObj.content.substring(0, 140)} {noteObj.content.length > 160 ? "..." : ""}</p>
            <div style={{marginTop: "auto", display: "flex", alignItems: "space-evenly", fontSize: "0.7rem" }}>
                <span style={{marginRight: "10px"}}><img src={dateSvg}></img></span>
                <span>{noteObj.date}</span>
            </div>
        </div>
    )
}

export default MiniatureNote;