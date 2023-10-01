import ButtonNextPage from "../../../components/ButtonNextPage";
import CatalogCard from "../../../components/CatalogCard";
import SearchBar from "../../../components/SearchBar";
import { ProductDTO } from "../../../models/product";
import "./styles.scss";

export default function Catalog() {
  const product: ProductDTO = {
    id: 1,
    name: "Pc Gamer I5 Gt 1030 ",
    price: 3000,
    imgUrl:
      "https://m.media-amazon.com/images/I/61a30YVcP2L.__AC_SX300_SY300_QL70_ML2_.jpg",
    description:
      "Explore o poder do gaming com nosso PC Gamer equipado com um processador Intel Core i5, 8GB de RAM, SSD de 240GB e uma placa de vídeo GT 1030 de 2GB. Experimente jogos com gráficos impressionantes e fluidez excepcional, tudo isso impulsionado por uma fonte de alimentação 500W 80 Plus. Este é o seu ingresso para a melhor experiência de gaming!",
    categories: [
      {
        id: 3,
        name: "Computadores",
      },
      {
        id: 2,
        name: "Eletrônicos",
      },
    ],
  };

  return (
    <>
      <main className="dsc-container">
        <div className="dsc-mt-20">
          <SearchBar />
        </div>

        <section id="catalog-section" className="dsc-catalog">
          <div className="dsc-catalog-cards dsc-mb-20 dsc-mt-20">
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
          </div>

          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
