import React, { useContext, useState } from "react";
import { notesContext } from "./AppContainer";
import "./css/categoriesContainer.css"
// import archieSvg from "../assets/svg/categories/archiveC.svg";
import AllSvg from "../assets/svg/categories/All.svg";
import TodaySvg from "../assets/svg/categories/Today.svg";
import TodoSvg from "../assets/svg/categories/Todo.svg";
import PersonalSvg from "../assets/svg/categories/personal.svg";
import HealthSvg from "../assets/svg/categories/health.svg";
import FinanceSvg from "../assets/svg/categories/finance.svg";
import StudiesSvg from "../assets/svg/categories/studies.svg";
import IdeasSvg from "../assets/svg/categories/ideas.svg";
import QuotesSvg from "../assets/svg/categories/quotes.svg";
import OtherSvg from "../assets/svg/categories/other.svg";
import ArchiveSvg from "../assets/svg/general/archiveC.svg";
import { Context } from "../../App.jsx";


const categoryIcons = {
    All: AllSvg,
    Today: TodaySvg,
    Todo: TodoSvg,
    Personal: PersonalSvg,
    Health: HealthSvg,
    Finance: FinanceSvg,
    Studies: StudiesSvg,
    Ideas: IdeasSvg,
    Quotes: QuotesSvg,
    Other: OtherSvg
  };

const CategoriesContainer = () => {
    const {isLogged, setIsLogged} = useContext(Context);
    const {setChosenCategory, isCreateMode, isEditMode} = useContext(notesContext);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const categories = ["All", "Today", "Todo", "Personal", "Health", "Finance", "Studies", "Ideas", "Quotes", "Other"];
    const containerStyle = {
        color: "#3A3A3A ",
        backgroundColor: "#F9E6D9 ",
        fontWeight: "bold",
        height: "100%",
        // border: "1px solid white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        fontSize: "0.5rem",
    }

    const handleClick = (e, index) => {
        const clickedCategory = e.currentTarget.querySelector("span").textContent;
        setChosenCategory(clickedCategory === "All" ? "default" : clickedCategory);
        setSelectedIndex(index);
        console.log(index);
    }

    const handleLogout = () => {
        fetch("http://localhost:3000/logout");
        setIsLogged(false);
    }

    return (
        <div style={containerStyle}>
            {categories.map((category, index) => {

                return (
                    <div key={index} style={{marginTop: index === 0 ? "20px" : "9px"}} onClick={(e) => handleClick(e, index)} className="categoryElement">
                        <img src={categoryIcons[category]}></img>
                        <span style={{marginLeft: "8px", fontSize: "1rem"}}>{category}</span>
                        <div className={`borderDiv ${index === selectedIndex ? "isSelected" : ""}`}></div>
                    </div>
                )
            })}
            <div style={{marginTop: "9px"}} onClick={(e) => handleClick(e, categories.length)} className="categoryElement">
                <img src={ArchiveSvg}></img>
                <span style={{marginLeft: "8px", fontSize: "1rem"}}>Archive</span>
                <div className={`borderDiv ${categories.length === selectedIndex ? "isSelected" : "hh"}`}></div>
            </div>
            <div style={{marginTop: "9px"}} className="categoryElement" onClick={handleLogout}>
                <span style={{marginLeft: "8px", fontSize: "1rem"}}>Archive</span>
            </div>
        </div>
    )
}

export default CategoriesContainer;