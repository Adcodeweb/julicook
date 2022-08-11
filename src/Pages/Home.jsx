import "../index.scss";
import chef from "../img/Chef-batiendo.png";
import SliderCards from "../Components/Slider-cards";
import { IoIceCream } from "react-icons/io5";
import { collection, getDocs, orderBy } from "firebase/firestore";
import { Link } from "react-router-dom";
import { query, limit } from "firebase/firestore";
import { db } from "../firebase-config";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { useEffect, useState } from "react";

export default function Home() {
  const productsCollectionRef = collection(db, "Products");
  const [lastRecipes, setLastRecipes] = useState([]);

  useEffect(() => {
    const recipes = query(
      productsCollectionRef,
      orderBy("title", "asc"),
      limit(4)
    );
    getDocs(recipes).then((collection) => {
      const product = collection.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setLastRecipes(product);
    });
  }, []);

  const recetas = lastRecipes.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <Link to={`/receta/${item.id}`}>
          <SliderCards img={item.img} title={item.title} />
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
      <h2 className="title_section">Recetas mas vistas</h2>
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
            slidesPerView={4}
          >
            {recetas}
          </Swiper>
        </section>
        <section className="aside_blog">
          <div>
            <h3>Ultimos Post</h3>
            <hr className="aside_linea" />
            <div className="blog_text">
              <ul>
                <li>
                  <IoIceCream className="list_icon" />
                  Beneficios del té verde
                </li>
                <li>
                  <IoIceCream className="list_icon" />
                  Beneficios del té verde
                </li>
                <li>
                  <IoIceCream className="list_icon" />
                  Beneficios del té verde
                </li>
                <li>
                  <IoIceCream className="list_icon" />
                  Beneficios del té verde
                </li>
                <li>
                  <IoIceCream className="list_icon" />
                  Beneficios del té verde
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
