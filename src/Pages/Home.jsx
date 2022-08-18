import "../index.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCards from "../Components/Slider-cards";
import chef from "../img/Chef-batiendo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  orderBy,
  where,
  query,
  limit,
} from "firebase/firestore";

export default function Home() {
  const productsCollectionRef = collection(db, "Products");
  const [lastRecipes, setLastRecipes] = useState([]);
  const [postresRecipes, setLastPostresRecipes] = useState([]);

  useEffect(() => {
    const recipes = query(
      productsCollectionRef,
      where("receta", "==", "receta"),
      orderBy("title", "asc"),
      limit(8)
    );
    getDocs(recipes).then((collection) => {
      const product = collection.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setLastRecipes(product);
    });

    const postres = query(
      productsCollectionRef,
      where("receta", "==", "postre"),
      orderBy("title", "asc"),
      limit(8)
    );

    getDocs(postres).then((collection) => {
      const postre = collection.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setLastPostresRecipes(postre);
    });
  }, []);

  const recetas = lastRecipes.map((item, index) => {
    return (
      <SwiperSlide className="card_home_sw" key={item.id}>
        <Link to={`/receta/${item.id}`}>
          <SliderCards img={item.cover} title={item.title} />
        </Link>
      </SwiperSlide>
    );
  });
  const Postres = postresRecipes.map((item) => {
    return (
      <SwiperSlide className="card_home_sw" key={item.id}>
        <Link to={`/receta/${item.id}`}>
          <SliderCards img={item.cover} title={item.title} />
        </Link>
      </SwiperSlide>
    );
  });
  return (
    <div className="home_container">
      <div
        style={{
          backgroundImage: `url(../img/CookingBook.jpg)`,
        }}
        className="hero_container"
      >
        <h1 className="hero_title">Cocina Conmigo</h1>
        <img src={chef} className="chef_img" alt="chef" />
      </div>
      <h2 className="title_section">Ultimas Recetas</h2>
      <div className="section_two">
        <section className="swiper_section">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={3}
          >
            {recetas}
          </Swiper>
          <h2 className="title_section title_section2 ">Ultimos Postres</h2>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={3}
          >
            {Postres}
          </Swiper>
        </section>
        <section className="aside_blog">
          <div>
            <h3>Ultimos Post</h3>
            <hr className="aside_linea" />
            <div className="blog_text">
              <ul>
                <li>Beneficios del té verde</li>
                <li>Cuanta agua debo ingerir en el dia?</li>
                <li>Beneficios de ingerir alcachofas</li>
                <li>Como crear habitos</li>
                <li>Beneficios de saltar cuerda</li>
                <li>Como organizar la comida de la semana</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
