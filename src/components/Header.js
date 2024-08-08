import "./Header.css";
import myLogo from "../images/[removal.ai]_tmp-64984198bcef5 (1).png";

function Header() {
  return (
    <div>
      <div id="header">
        <div id="logo">
          <p id="name">
            <img
              id="myLogo"
              alt="Mylogo"
              src={myLogo}
              style={{ backgroundColor: "white" }}
            />{" "}
            <span id="idwan"> idwan </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
