import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";

function App() {
  document.addEventListener('contextmenu', event => event.preventDefault());
  document.onkeydown = function (e) {  
// disable F12 key
if(e.keyCode == 123) {  
return false;
}
 
// disable I key
if(e.ctrlKey && e.shiftKey && e.keyCode == 73){ 
return false; 
} 

// disable J key0 
if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
return false;
}

// disable U key
if(e.ctrlKey && e.keyCode == 85) {
return false;
}
  }

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
