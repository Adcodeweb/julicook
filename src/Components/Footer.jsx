import logo from "../img/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_s1">
        <p>Receta</p>
        <p>Postres</p>
        <p>Desayunos</p>
        <p>Top recetas</p>
        <p>Admin</p>
        <p>Contact</p>
      </div>
      <div className="line"></div>
      <div className="footer_s2">
        <img src={logo} alt="logo" className="footer_logo" />
      </div>
    </footer>
  );
}
