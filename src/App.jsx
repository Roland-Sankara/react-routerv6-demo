import Home from "./pages/Home";
import Quotes from "./pages/Quotes";
import Faqs from "./pages/Faqs";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css";

function App(){
  return(
    <div>
      {/* Navigation Menu */}
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/quotes">Quotes</a>
            </li>
            <li>
              <a href="/faqs">FAQs</a>
            </li>
          </ul>
        </nav>
      </header>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/quotes" element={<Quotes/>}/>
          <Route path="/faqs" element={<Faqs/>}/>
        </Routes>

      </BrowserRouter>


    </div>
  )
}

export default App;