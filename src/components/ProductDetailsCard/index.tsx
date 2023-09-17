import "./styles.scss";
import ProductCategory from "../ProductCategory";
import { ProductDTO } from "../../models/product";

export default function ProductDetailsCard(props: { product: ProductDTO }) {
  const { id, name, price, imgUrl, description, categories } = props.product;
  return (
    <>
      <div className="dsc-card dsc-mb-20">
        <div className="dsc-product-details-top dsc-line-bottom">
          <img id="product-image" src={imgUrl} alt="notbook" />
        </div>

        <div className="dsc-product-details-bottom">
          <h3>{`R$ ${price}`}</h3>
          <h4>{name}</h4>
          <p>{description}</p>
          <div className="dsc-card-tags">
            {categories.map((category) => (
              <ProductCategory category={category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
