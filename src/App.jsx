import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import ArrowUp from "./components/arrowUp/ArrowUp";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ArrowUp />
        <Header />
        <Projects />
        <About />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
