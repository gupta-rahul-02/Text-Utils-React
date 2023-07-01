import React, { useState } from "react";
//import copy from 'react-copy-to-clipboard'

export default function TextForm(props) {


  const handleUpperCase = () => {
    //console.log("Upper Case is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text converted to UPPERCASE','success')
  };


  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text converted to lowercase','success')
  };

  const handleTitleCase = () => {
    let newText = text
      .toLowerCase() 
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    //console.log(newText);
    setText(newText);
    props.showAlert('Text converted to Title case','success')
  };

  const handleClearText = () =>{
    let newText = "";
    setText(newText)
    props.showAlert('Text cleared','warning')
  }

  const handleOnChange = (event) => {
    //console.log(event)
    setText(event.target.value);
  };

  const handleResetText = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    // setColor('black');
    setFontStyle('normal')
    setWeight('normal')
    props.showAlert('Text has been reset','warning')

  }

//copy to clipboard
  const copyToClipboard = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert('Text','success')
   }

  const [text, setText] = useState(""); // useState hook
  // text = 'new text' --- wrong way to change the state
  // setText('New Text') -- correct way to change the state

//  const [color, setColor] = useState("black")
 //useState for changing color of text

const [weight, setWeight] = useState('normal')

const [fontStyle,setFontStyle] = useState('normal')

  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
        style={{
          color:props.mode === 'dark' ? 'white' : 'black',
          fontWeight:weight ,
          fontStyle:fontStyle,
           backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
        }}
          className="form-control"
          id="myBox"
          value={text}
          onChange={handleOnChange} //The onchange event occurs when the value of an HTML element is changed.
          rows="10"

        ></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpperCase}>
        Convert to Upppercase
      </button>
      <button className="btn btn-primary mx-1 my-1"disabled={text.length===0} onClick={handleLowerCase}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-1 my-1"disabled={text.length===0} onClick={handleTitleCase}>
        Convert to Titlecase
      </button>
      <button className="btn btn-primary mx-1 my-1"disabled={text.length===0} onClick={handleClearText}>
        Clear text
      </button>
      {/* <button className="btn btn-primary mx-1 my-2" onClick= {() => setColor("red")}>
        Color red
      </button>
      <button className="btn btn-primary mx-1 my-2" onClick= {() => setColor("green")}>
        Color green
      </button>
      <button className="btn btn-primary mx-1 my-2" onClick= {() => setColor("black")}>
        Reset color
      </button> */}
      <button className="btn btn-primary mx-1 my-2"disabled={text.length===0} onClick= {() => setWeight("bold")}>
        Bold text
      </button>
      <button className="btn btn-primary mx-1 my-2"disabled={text.length===0} onClick= {() => setFontStyle("italic")}>
        Italic text
      </button>
      <button className="btn btn-primary mx-1 my-2"disabled={text.length===0} onClick= {handleResetText}>
        Reset text
      </button>
      <button className="btn btn-primary mx-1 my-2"disabled={text.length===0} onClick= {copyToClipboard}>
        Copy to clipboard
      </button>



    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h3>Your text summary</h3>
      <p><b>{text.split(" ").filter((element) => {return element.length !== 0}).length} </b>words and <b>{text.length}</b> characters</p>
      <p>Time to read text :- <b>{text.split(" ").length * 0.008} </b>Minutes</p>
      <h3>Preview</h3>
      <p>{text.length>0 ? text : "Enter text to preview it"}</p>
    </div>

    ,</>
  );
}
