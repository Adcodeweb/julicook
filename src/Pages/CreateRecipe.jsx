import { useState } from "react";
import { db } from "../firebase-config";
import { collection, addDoc, arrayUnion } from "firebase/firestore";

export default function CreateRecipe() {
  const [recipe, setRecipe] = useState({
    title: "",
    descripcion: "",
    cover: "",
    receta: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setRecipe((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addRecipe = (event) => {
    event.preventDefault();

    const docRef = addDoc(collection(db, "Products"), {
      title: recipe.title,
      descripcion: recipe.descripcion,
      cover: recipe.cover,
      receta: recipe.receta,
      ingredientes: arrayUnion(),
    }).then((docRef) => {
      const docId = docRef.id;
      console.log(docId);
    });
  };

  return (
    <div>
      <form onSubmit={addRecipe}>
        <input
          type="text"
          name="title"
          value={recipe.title}
          onChange={handleChange}
          placeholder="titulo de receta"
        />
        <br />

        <input
          type="text"
          name="descripcion"
          value={recipe.descripcion}
          onChange={handleChange}
          placeholder="descripcion de receta"
        />
        <br />

        <input
          type="text"
          name="cover"
          value={recipe.cover}
          onChange={handleChange}
          placeholder="link de imagen para cover"
        />
        <br />

        <input
          type="text"
          name="receta"
          value={recipe.receta}
          onChange={handleChange}
          placeholder="tipo de receta"
        />
        <br />

        <input
          type="text"
          name="ingrediente"
          value={recipe.ingrendiente}
          onChange={handleChange}
          placeholder="ingrediente"
        />

        <button>Save Recipe</button>
      </form>
    </div>
  );
}
