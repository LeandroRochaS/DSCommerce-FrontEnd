import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductDTO } from "../../../models/product";
import ButtonNextPage from "../../../components/ButtonNextPage";
import CatalogCard from "../../../components/CatalogCard";
import SearchBar from "../../../components/SearchBar";
import "./styles.scss";
import * as productService from "../../../services/product-service";
export default function Catalog() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    productService
      .findAll()
      .then((response) => setProducts(response.data.content))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <main className="dsc-container">
        <div className="dsc-mt-20">
          <SearchBar />
        </div>

        <section id="catalog-section" className="dsc-catalog">
          <div className="dsc-catalog-cards dsc-mb-20 dsc-mt-20">
            {products.map((product: ProductDTO) => (
              <Link
                className="dsc-link"
                to={`/product-details/${product.id}`}
                key={product.id}
              >
                <CatalogCard product={product} />
              </Link>
            ))}
          </div>

          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
