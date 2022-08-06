import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import BurgerMenu from "./BurgerMenu";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    const body = document.getElementById("body");
    setIsActive(!isActive);
    body.classList.toggle("fixed_body");
  }

  return (
    <div className="navbar">
      <div className={isActive ? "blur_page" : ""}></div>

      <Link to="/">
        <img className="navbar_logo navbar_logo_off" src={logo} alt="logo" />
      </Link>

      <div className={isActive ? "box_active " : "box"}>
        <Link className="navbar_enlace" to="/products">
          Recetas
        </Link>

        <Link className="navbar_enlace" to="/">
          Snacks
        </Link>

        <Link to="/">
          <img className="navbar_logo" src={logo} alt="logo" />
        </Link>

        <Link className="navbar_enlace" to="/postres">
          Postres
        </Link>

        <Link className="navbar_enlace" to="/blog">
          Blog
        </Link>
      </div>

      <BurgerMenu isActive={isActive} toggle={toggle} />
    </div>
  );
}
