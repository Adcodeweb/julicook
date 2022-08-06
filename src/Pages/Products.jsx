import Card from "../Components/Card";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import chef from "../img/Chef-Pancakes.png";

export default function Products() {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "Products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProducts();
  }, []);

  const cards = products.map((item) => {
    return (
      <Card
        key={item.id}
        clave={item.id}
        title={item.title}
        img={item.img}
        description={item.descripcion}
      />
    );
  });
  return (
    <div className="products_page">
      <h1 className="page_title">Recetas</h1>
      <section className="products_container">
        <div className="cards__container">{cards}</div>

        <aside className="aside">
          <h4>Categoria</h4>
          <ul className="aside_list">
            <p>Sopa</p>
            <p>Sopa</p>
            <p>torta</p>
            <p>Sopa</p>
            <p>Sopa</p>
            <p>Sopa</p>
            <p>Sopa</p>
            <p>Sopa</p>
            <p>Sopa</p>
            <p>Sopa</p>
            <p>Sopa</p>
            <p>Sopa</p>
          </ul>
        </aside>
      </section>
    </div>
  );
}
