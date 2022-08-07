import logo from "../img/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_s1">
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
      </div>
      <div className="line"></div>
      <div className="footer_s2">
        <img src={logo} alt="logo" className="footer_logo" />
      </div>
    </footer>
  );
}
