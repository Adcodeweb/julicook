import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
export default function NavbarLinks(props) {
  return (
    <>
      <li className={`shut_links ${props.showLink && "show_links"}`}>
        <Link onClick={props.onClick} className="navbar_enlace" to="/recetas">
          Recetas
        </Link>
      </li>
      <li className={`shut_links ${props.showLink && "show_links"}`}>
        <Link onClick={props.onClick} className="navbar_enlace" to="/">
          Snacks
        </Link>
      </li>
      {props.logo && (
        <li className="nvb_logo menu_logo" onClick={props.onClick}>
          <Link className="navbar_enlace " to="/">
            <img src={logo} alt="logo" />
          </Link>
        </li>
      )}
      <li
        className={`shut_links nvb_logo_li  ${props.showLink && "show_links"}`}
      >
        <Link onClick={props.onClick} className="navbar_enlace" to="/postres">
          Postres
        </Link>
      </li>
      <li className={`shut_links ${props.showLink && "show_links"}`}>
        <Link onClick={props.onClick} className="navbar_enlace" to="/blog">
          Blog
        </Link>
      </li>
    </>
  );
}
