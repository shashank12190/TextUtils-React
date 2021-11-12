// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  //weather dark mode is enabled or not 
  const [mode, setmode] = useState("light")//weather dark mode is enabled or not 
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "#1f1139"
      showAlert("Dark mode has been enabled", "success")
    } else {
      setmode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      {/* <Router> */}

      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>  */}
        {/* <Route path="/about">
              <About />
            </Route>  */}
        {/* <Route path="/"> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}



    </>
  )
}

export default App;
