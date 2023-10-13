import ProductDetailsCard from "../../../components/ProductDetailsCard";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ButtonInverse from "../../../components/ButtonInverse";
import "./styles.scss";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";

export default function ProductDetails() {
  const { productIdString } = useParams();
  const [product, setProduct] = useState<ProductDTO>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!productIdString) return;
    productService
      .findById(productIdString)
      .then((response) => {
        setProduct(response.data); 
        console.log(response.data);
      })
      .catch(() => {
        navigate("/");
      });
  }, [productIdString]);

  return (
    <>
      <main>
        <section
          id="dsc-product-details-section"
          className="dsc-container dsc-product-details-section"
        >
          {product && <ProductDetailsCard product={product} /> }
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
