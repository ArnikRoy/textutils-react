// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
//   // Link
// } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// let name="GGG"
function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled!", "success")
      // document.title='TextUtils - Dark mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled!", "success")
      // document.title='TextUtils - Light mode'
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title={"TestUtils"} mode={mode} aboutTestUtils="About" toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Navbar/> */}
        <div className='container' my="5">
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter your text" showAlert={showAlert} convertToUppercase="Convert to uppercase" convertToLowercase="Convert to Lowercase" replace="replace" mode={mode} />} />
          </Routes> */}
          <TextForm heading="Enter your text" showAlert={showAlert} convertToUppercase="Convert to uppercase" convertToLowercase="Convert to Lowercase" replace="replace" mode={mode}/>
          {/* <About /> */}
        </div>
      {/* </Router> */}
    </>

  );
}

export default App;
