import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./Components/Header/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/ContactUs/Contact";
import { useEffect, useState } from "react";

function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavBar />
      <Container id="Up">
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </Container>
      <Footer />

      {scroll && (
        <a
          style={{ opacity: scroll ? 1 : 0, transition: "all 0.3s" }}
          href="#Up"
        >
          <button
            className="fa-solid fa-hand-pointer border-radius scroll"
            aria-label="Scroll to top"
          ></button>
        </a>
      )}
    </>
  );
}

export default App;
