import React, { useContext, useState } from 'react';
import "../css/actionContainer.css";
import { Context } from "../NewNote.jsx"
import categorySvg from "../../assets/svg/actionBar/folder.svg";


function Category() {
    const {noteObj, setNoteObj} = useContext(Context);
    const [category, setCategory] = useState("default");
    const [isClicked, setIsClicked] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isChosen, setIsChosen] = useState(false);

    const handleCategoryClick = () => {
        setIsClicked(true);
        setIsDropdownOpen(!isDropdownOpen);
    }

    const handleLiClick = (e) => {
        setCategory(e.target.textContent);
        setIsChosen(true);
        setNoteObj( prevState => ({
            ...prevState,
            ["category"]: e.target.textContent
        }));
    }

    return (
        <div id='categoryContainer' onClick={handleCategoryClick} className={`actionContainer ${isClicked ? "actionClicked" : ""}`}  style={{ position: "relative"}}>
            <img src={categorySvg} style={{paddingBottom: "2px"}}></img>
            <span className='actionName'>{isChosen ? category : "Category"}</span>
            <ul onClick={handleLiClick} style={{display: isDropdownOpen ? "block" : "none" ,position:"absolute", bottom: "50px", left: "1"}}>
                <li>Personal</li>
                <li>Health</li>
                <li>Finance</li>
                <li>Studies</li>
                <li>Ideas</li>
                <li>Quotes</li>
                <li>Other</li>
            </ul>
        </div>
    );
}

export default Category;