import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const handleUpperClick = () => {
        // console.log('Upper case is clicked : ' + text)
        let newText = text.toUpperCase(text)    //function to convert to upper case
        setText(newText)
        props.showAlert("Converted to upper case!", "success")
    }
    const handleLowerClick = () => {
        // console.log('Upper case is clicked : ' + text)
        let newText = text.toLowerCase(text)    //function to convert to upper case
        setText(newText)
        props.showAlert("Converted to lower case!", "success")
    }
    const handleReplaceClick = () => {
        // console.log('Upper case is clicked : ' + text)
        let newText = text.replace("hey", "hiii")    //function to convert to upper case
        setText(newText)
        props.showAlert("Word replaced!", "success")
    }
    const handleOnChange = (event) => {
        // console.log('on change is clicked' )
        setText(event.target.value)
    }
    // text='new text' //wrong way to update
    // setText('new text') // correct way to update
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1 className='container' style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" class="form-label">Example textarea</label> */}
                    <textarea className="form-control" id="myBox" rows="7" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'#eeeeee' , color: props.mode==='dark'?'white':'black'}}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpperClick}>{props.convertToUppercase}</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerClick}>{props.convertToLowercase}</button>
                <button className="btn btn-primary mx-2" onClick={handleReplaceClick}>{props.replace}</button>
            </div>

            <div className="container my-4 " style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                {/* <p>Words : {text.split(" ").length}    and    char : {text.length}</p> */}
                <p>Words : {text.trim().length > 0 ? text.trim().split(/\s+/).length : 0} and char : {text.length}</p>
                {/* <p>Time taken to read : {0.007 * text.split(" ").length}</p> */}
                <p>Time taken to read : {text.trim().length > 0 ? (0.007 * text.trim().split(/\s+/).length).toFixed(2) : 0} minutes</p>
                <h2 my-3>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above"}</p>
            </div>
        </>
    )
}
