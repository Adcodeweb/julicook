import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useEffect, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";

export default function Details() {
  let { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [pasos, setPasos] = useState([""]);
  const [ingredientes, setIngredientes] = useState([""]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const docRef = doc(db, "Products", productId);
    getDoc(docRef).then((doc) => {
      setProduct(doc.data());
      setPasos(doc.data().pasos);
      setIngredientes(doc.data().ingredientes);
      setIsLoading(false);
    });
  }, [productId]);

  const Details = pasos.map((step, index) => {
    return (
      <li key={index} className="step_container">
        <div className="step_box">
          <h3>{step.titulo}</h3>
          <p>{step.descripcion}</p>
          {step.img && (
            <div
              style={{ backgroundImage: `url(${step.img})` }}
              className="step_img"
            ></div>
          )}
        </div>
      </li>
    );
  });

  const Ingredientes = ingredientes.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <div className="product">
      {isLoading ? (
        <PuffLoader color={"black"} loading={isLoading} size={50} />
      ) : (
        <>
          <section className="product_sec1">
            <div className="product_img">
              <img src={product.cover} alt={product.title} />
            </div>
            <div className="product__info">
              <h2 className="product_title">{product.title}</h2>
              <div className="product_text">
                {product.time && (
                  <p>
                    <strong>Tiempo de cocinado: </strong>
                    {product.time} min
                  </p>
                )}
                <p>
                  Ingredientes:
                  <br />
                  {Ingredientes}
                </p>
              </div>
            </div>
          </section>
          {pasos && <ol className="detalles_container">{Details}</ol>}
        </>
      )}
    </div>
  );
}
