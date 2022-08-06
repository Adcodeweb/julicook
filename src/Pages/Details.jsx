import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useEffect, useState } from "react";

export default function Details() {
  let { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const docRef = doc(db, "Products", productId);
    getDoc(docRef).then((doc) => {
      setProduct(doc.data());
      setSteps(doc.data().steps);
    });
  }, []);

  return (
    <div className="product">
      <section className="product_sec1">
        <div className="product_img">
          <img
            className="img__container"
            src={product.img}
            alt={product.title}
          />
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
              <strong>Descripcion:</strong> {product.descripcion}
            </p>
          </div>
        </div>
      </section>
      {steps && (
        <div>
          <h3>Detalle</h3>
          <p>{steps[1]}</p>
          <p>{steps[2]}</p>
          <p>{steps[3]}</p>
        </div>
      )}
    </div>
  );
}
