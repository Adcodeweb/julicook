import NavbarLinks from "./NavbarLinks";
import logo from "../../img/logo.png";
import { useState } from "react";

export default function NavbarMovile() {
  const [isBurger, setIsBurger] = useState(false);

  const handleClick = () => {
    setIsBurger(!isBurger);
    const body = document.getElementById("body");
    setIsBurger(!isBurger);
    body.classList.toggle("fixed_body");
  };

  return (
    <nav className="navBar_mobile">
      <img src={logo} className="nvb_mb_logo" alt="logo" />
      <div className={isBurger ? "content open" : "content"} id="content">
        <NavbarLinks logo={true} onClick={handleClick} />
      </div>
      <div
        className={isBurger ? "hamburger open" : "hamburger"}
        onClick={handleClick}
        id="hamburger"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
