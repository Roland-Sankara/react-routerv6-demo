import Home from "./pages/Home";
import Quotes from "./pages/Quotes";
import Faqs from "./pages/Faqs";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import "./App.css";

function App(){
  return(
    <BrowserRouter>
      <div>
        {/* Navigation Menu */}
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/quotes">Quotes</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
            </ul>
          </nav>
        </header>


          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/quotes" element={<Quotes/>}/>
            <Route path="/faqs" element={<Faqs/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;