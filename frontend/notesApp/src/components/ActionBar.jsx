import React from "react";
// import Upload from "./actionBarComponents/Upload";
import Category from "./actionBarComponents/Category";
import Pin from "./actionBarComponents/Pin";
import Archive from "./actionBarComponents/Archive";
import SaveButton from "./actionBarComponents/SaveButton";


const ActionBar = () => {
    const style = {
        display: "flex",
        alignItems: "center",
        // backgroundColor: "#3A3A3A ",
        height: "42px",
        width: "240px",
        borderRadius: "10px"
        // position: "absolute",
        // bottom: "10vh",
        // left: "50%",
        // transform: "translateX(-50%)"
    }

    return (
        <div style={{height: "100%",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div style={style}>
                {/* <Upload value="no link" isSaved={isSaved} sendDataToParent={sendDataToParent}/> */}
                <Category />
                <Pin />
                <Archive />
                <SaveButton/>
            </div>
        </div>
        
    )
}

export default ActionBar;