import "../index.scss";
import chef from "../img/Chef-batiendo.png";

export default function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(../img/CookingBook.jpg)`,
        }}
        className="hero_container"
      >
        <h1 className="hero_title">Cocina Conmigo</h1>
        <img src={chef} className="chef_img" />
      </div>
    </div>
  );
}
