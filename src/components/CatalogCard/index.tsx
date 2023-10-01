import "./styles.scss";
import { ProductDTO } from "../../models/product";

export default function CatalogCard(props: { product: ProductDTO }) {
  const { product } = props;

  return (
    <>
      <div className="dsc-card">
        <div className="dsc-catalog-card-top  dsc-line-bottom">
          <img src={product.imgUrl} alt="Computer" />
        </div>
        <div className="dsc-catalog-card-bottom">
          <h3>{`R$ ${product.price}`}</h3>
          <h4>{product.name}</h4>
        </div>
      </div>
    </>
  );
}
