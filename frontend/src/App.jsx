import "./App.css";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUp from "./components/registration/SignUp";
import SignIn from "./components/registration/SignIn";
import Header from "./components/headers/Header";
function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
