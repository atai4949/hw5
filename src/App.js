import './App.css';
import Main from "./components/main/Main";
import About from "./components/about/About"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";




function App() {
    return (
      <div>
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )

}

export default App;
