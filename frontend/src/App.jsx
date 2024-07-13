import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUp from "./components/registration/SignUp";
import SignIn from "./components/registration/SignIn";
import Header from "./components/headers/Header";
import { Container } from "@chakra-ui/react";
function App() {
  return (
    <Container maxWidth={"full"}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
        </Routes>
    </Container>
  );
}

export default App;
