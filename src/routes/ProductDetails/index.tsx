import ProductDetailsCard from "../../components/ProductDetailsCard";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonInverse from "../../components/ButtonInverse";
import HeaderClient from "../../components/HeaderClient";
import "./styles.scss";
import { ProductDTO } from "../../models/product";

const product: ProductDTO = {
  id: 1,
  name: "Pc Gamer I5 Gt 1030 ",
  price: 2999.99,
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

export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section
          id="dsc-product-details-section"
          className="dsc-container dsc-product-details-section"
        >
          <ProductDetailsCard product={product} />
          <div className="dsc-btn-page-container">
            <ButtonPrimary text="Comprar" />
            <ButtonInverse text="Início" />
          </div>
        </section>
      </main>
    </>
  );
}
