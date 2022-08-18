import Card from "../Components/Card";
import Filter from "../Components/Filter";

import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  orderBy,
  startAfter,
  where,
  query,
  limit,
} from "firebase/firestore";

import { useEffect, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";

export default function Products() {
  const [listOfProducts, setListOfProducts] = useState([]);
  const productsCollectionRef = collection(db, "Products");
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastDoc, setLastDoc] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const firstDocs = query(
      productsCollectionRef,
      where("receta", "==", "receta"),
      orderBy("title"),
      limit(4)
    );
    getDocs(firstDocs).then((collections) => {
      const isCollectionEmpty = collections.size === 0;
      if (!isCollectionEmpty) {
        const products = collections.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const lastDoc = collections.docs[collections.docs.length - 1];
        setListOfProducts(products);
        setLastDoc(lastDoc);
      } else {
        setIsEmpty(true);
      }
      setIsLoading(false);
      setLoading(false);
    });
  }, []);

  const fetchMore = () => {
    setLoading(true);
    const next = query(
      productsCollectionRef,
      orderBy("title"),
      startAfter(lastDoc),
      limit(4)
    );
    getDocs(next).then((collections) => {
      const isCollectionEmpty = collections.size === 0;
      if (!isCollectionEmpty) {
        const products = collections.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(products);

        const lastDoc = collections.docs[collections.docs.length - 1];
        setListOfProducts((listOfProducts) => [...listOfProducts, ...products]);
        setLastDoc(lastDoc);
      } else {
        setIsEmpty(true);
      }
      setLoading(false);
    });
  };

  const cards = listOfProducts.map((item) => {
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
      <h1 className="page_title">Recetas</h1>
      <div className="products_page">
        {isLoading ? (
          <PuffLoader color={"black"} loading={isLoading} size={50} />
        ) : (
          <>
            <section className="products_container">
              <div className="cards__container">{cards}</div>
              <aside className="aside">
                <Filter />
              </aside>
            </section>

            {!isEmpty && !loading && (
              <button className="btn_more" onClick={fetchMore}>
                Mostrar más
              </button>
            )}
            {loading && <h1>loading...</h1>}

            {isEmpty && <h2>end</h2>}
          </>
        )}
      </div>
    </div>
  );
}
