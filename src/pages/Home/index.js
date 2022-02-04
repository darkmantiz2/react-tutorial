import React from "react";
import Card from "../../components/Card";

const Home = () => {
  const openWebsite = (id) => {
    console.log("abrir pagina web", id);

    window.open(`https://google.com/search?q=${id}`, '_blank');
  };

  return (
    <>
      <p>Test</p>

      {[1, 2, 3, 4].map((item) => (
        <>
          <Card
            title="Esto es un titulo"
            description="esto es una descripcion"
            onClick={() => openWebsite(item)}
          />
        </>
      ))}
    </>
  );
};

export default Home;
