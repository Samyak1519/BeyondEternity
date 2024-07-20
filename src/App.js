import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container } from "reactstrap";
import AboutUs from "./Components/AboutUs";
import AddProject from "./Components/AddProject";
import AllProjects from "./Components/AllProjects";
import Home from "./Components/Home";
import NaviBar from "./Components/NaviBar";
import Footer from "./HeadFoot/Footer";
import Header from "./HeadFoot/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <NaviBar />

        <Container
          style={{
            backgroundColor: "whitesmoke",
            borderRadius: "20px",
            padding: "35px",
          }}
        >
          <Routes>
            <Route path="/" Component={Home} exact />
            <Route path="/add-project" Component={AddProject} exact />
            <Route path="/all-projects" Component={AllProjects} exact />
            <Route path="/about-us" Component={AboutUs} exact />
          </Routes>
        </Container>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
