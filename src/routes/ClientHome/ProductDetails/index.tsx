import ProductDetailsCard from "../../../components/ProductDetailsCard";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ButtonInverse from "../../../components/ButtonInverse";
import * as productService from "../../../services/product-service";
import "./styles.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  const { productIdString } = useParams();
  const product = productService.findById(Number(productIdString));

  return (
    <>
      <main>
        <section
          id="dsc-product-details-section"
          className="dsc-container dsc-product-details-section"
        >
          {product && <ProductDetailsCard product={product} />}
          <div className="dsc-btn-page-container">
            <ButtonPrimary text="Comprar" />
            <Link className="dsc-link" to={"/"}>
              <ButtonInverse text="Início" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
