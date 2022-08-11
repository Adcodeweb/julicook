import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  return (
    <div className="navbar_Desktop">
      <ul className="nvb_links_box">
        <NavbarLinks logo={true} />
      </ul>
    </div>
  );
}
