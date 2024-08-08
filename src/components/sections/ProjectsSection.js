import "./ProjectsSection.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

const ProjectsSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    // Aos.refresh();
  }, []);

  return (
    <div id="projectsSection">
      <div id="container">
        <h1 className="sectionHeader"> Projects </h1>
        <div className="projectTabs">
          <div className="projectTab spotifyMuzikTab" data-aos="fade-right">
            <h1> SPOTIFY MUZIK</h1>

            <p>A music streaming site built using Spotify API</p>

            <ul>
              <li>
                <a
                  href="https://spotifymuzik.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faEye} />
                  </i>{" "}
                  Live{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Afolabi-Ridwan/SpotifyMuzik"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faCodeBranch} />
                  </i>{" "}
                  Code{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="projectTab gadgetStoreTab" data-aos="fade-right">
            <h1> GADGET</h1>

            <p>
              A Gadget store where you can search and find any kind of gadget
              such as phones, tvs, computers etc. you can add to cart and remove
              from cart, then check out. Its a functional and responsive
              website.
            </p>

            <ul>
              <li>
                <a
                  href="https://mygadgetstore.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faEye} />
                  </i>{" "}
                  Live{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Afolabi-Ridwan/gadget"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faCodeBranch} />
                  </i>{" "}
                  Code{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="projectTabs">
          <div className="projectTab weatherAppTab" data-aos="fade-right">
            <h1> Weather App</h1>

            <p>
              A weather map that shows major current weather components of
              specified city upon search.
            </p>

            <ul>
              <li>
                <a
                  href="https://afolabi-ridwan.github.io/WeatherApp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faEye} />{" "}
                  </i>{" "}
                  Live{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Afolabi-Ridwan/WeatherApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faCodeBranch} />
                  </i>{" "}
                  Code{" "}
                </a>
              </li>
            </ul>
          </div>

          <div
            className="projectTab expenseCalculatorTab"
            data-aos="fade-right"
          >
            <h1> Expense Calculator</h1>

            <p>
              An expense calculator that allows users to store and add their
              income and expenses. Expenses and Incomes are added up and are
              displayed separately. Expenses are subtracted from the income
              which is displayed as the users available balance.
            </p>

            <ul>
              <li>
                <a
                  href="https://afolabi-ridwan.github.io/expense-tracker/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faEye} />
                  </i>{" "}
                  Live{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Afolabi-Ridwan/expense-tracker"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faCodeBranch} />
                  </i>{" "}
                  Code{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="projectTabs">
          <div className="projectTab colorGameTab" data-aos="fade-right">
            <h1> Color Game</h1>

            <p>
              A game that shuffles any random RGB color, there are six boxes to
              make the right selection from. If wrong, the clicked box fades
              off, if correct, all the boxes background gets the correct color.
              User can click on Reset or Play Again button to reset the game.
            </p>

            <ul>
              <li>
                <a
                  href="https://afolabi-ridwan.github.io/colorGame/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faEye} />
                  </i>{" "}
                  Live{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Afolabi-Ridwan/colorGame"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faCodeBranch} />
                  </i>{" "}
                  Code{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="projectTab manageAppTab" data-aos="fade-right">
            <h1> Restho </h1>

            <p>
              A resturant web page where you can check their menu and make your
              order
            </p>

            <ul>
              <li>
                <a
                  href="https://restho.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faEye} />
                  </i>{" "}
                  Live{" "}
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Afolabi-Ridwan/manage"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faCodeBranch} />
                  </i>{" "}
                  Code{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="projectTabs">
          <div className="projectTab expenseTrackerTab" data-aos="fade-right">
            <h1> Expense Tracker</h1>

            <p>
              An expense tracker that allows users to record their daily
              expenses with a graphical reprsentation for each month. This was
              built with REACT JS
            </p>

            <ul>
              <li>
                <a
                  href="https://afolabi-ridwan.github.io/Expense-Tracker-ReactApp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faEye} />
                  </i>{" "}
                  Live{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Afolabi-Ridwan/Expense-Tracker-ReactApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faCodeBranch} />
                  </i>{" "}
                  Code{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
