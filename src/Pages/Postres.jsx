import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  orderBy,
  where,
  query,
  limit,
} from "firebase/firestore";
import { db } from "../firebase-config";

import Filter from "../Components/Filter";
import Card from "../Components/Card";

export default function Postres(params) {
  const productsCollectionRef = collection(db, "Products");

  const [listOfPostres, setListOfPostres] = useState([]);
  useEffect(() => {
    const recipes = query(
      productsCollectionRef,
      where("receta", "==", "postre"),
      orderBy("title", "asc"),
      limit(8)
    );
    getDocs(recipes).then((collection) => {
      const product = collection.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setListOfPostres(product);
    });
  }, []);

  const cards = listOfPostres.map((item) => {
    return (
      <Card
        key={item.id}
        clave={item.id}
        title={item.title}
        img={item.cover}
        description={item.descripcion}
      />
    );
  });

  return (
    <div>
      <h1 className="page_title">Postres</h1>
      <div className="products_page">
        <section className="products_container">
          <div className="cards__container">{cards}</div>

          <aside className="aside">
            <Filter />
          </aside>
        </section>
        <button className="btn_more">Mostrar más</button>
      </div>
    </div>
  );
}
