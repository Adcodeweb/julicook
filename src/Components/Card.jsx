import { Link, useParams } from "react-router-dom";

export default function Card(props) {
  let { productId } = useParams();

  return (
    <div className="card">
      <div
        style={{
          backgroundImage: `url(${props.img})`,
        }}
        className="card_img"
      ></div>
      <div className="card_info">
        <h1>{props.title}</h1>
        <p>{props.description}</p>

        <Link
          className="readmore_btn"
          to={`/product/${(productId = props.clave)}`}
        >
          Leer mas
        </Link>
      </div>
    </div>
  );
}
