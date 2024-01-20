import "./Menu.css";
import Service from "./menu/Service";
import Contact from "./menu/Contact";
import About from "./menu/About";
import Projects from "./menu/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
 

  return (
    <div id="menu">
      <div id="container">
        <Service />
        <div id="aboutAndContact">
          <div id="aboutAndProjects">
            <Projects />
            <About />
          </div>
          <Contact />
        </div>
      </div>
      
    </div>
  );
};

export default Menu;
