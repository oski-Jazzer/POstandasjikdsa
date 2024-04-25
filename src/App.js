import logo from './logo.svg';
import './App.css';
import Project from './Project/Project';
import html2canvas from "html2canvas"
import { useEffect } from 'react';


function App() {


  useEffect(() => {

    html2canvas(document.querySelector(".container" ),{ useCORS: true }).then(canvas => {
      document.body.appendChild(canvas )
    });
  }, [])


    return (
    <div>
    <Project/>

  
   </div>
   
    
  );
}

export default App;
