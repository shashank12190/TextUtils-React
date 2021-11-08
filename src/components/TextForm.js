import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("enter your text");
    // text = "new text"   //wrong method
    // setText("new Text")   //correct method
    const handleUpper = () => {
        // console.log("uper case was click" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case", "success")
    }
    const handleLower = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case", "success")
    }
    const handleClear = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared", "success")
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox")
        text.select();
        text.setSelectionRange(0, 99999)
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to Clipboard", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Cleared", "success")
    }
    const handleOnChange = (event) => {
        // console.log('onChange');
        setText(event.target.value);
    }

    return (
        <>
            <div style={{ color: props.mode === "dark" ? "white" : "#1f1139" }}>
                <div className="my-3 container" style={{ backgroundColor: props.mode === "dark" ? "#1f1139" : "white" }}>
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" style={{ backgroundColor: props.mode === "dark" ? "#1f1139" : "white", color: props.mode === "dark" ? "white" : "#1f1139" }} value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
                    <button className="btn btn-primary my-3" onClick={handleUpper}>Convert to uppercase</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleLower}>Convert to lowercase</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleCopy}>CopyText</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
                    <button className="btn btn-danger my-3 mx-1" onClick={handleClear}>Delete</button>
                </div>
                <div className="container my-3">
                    <h1>You Text Summary :-</h1>
                    <p> words-{text.split(" ").length} and Characters-{text.length}</p>
                    <p>{0.008 * text.split(" ").length} - minuts to read </p>
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : "Please add something"}</p>
                </div>
            </div>
        </>
    )
}
