import notebookImage from "../../assets/images/notebook.png";
import "./styles.scss";
import ProductCategory from "../ProductCategory";

export default function ProductDetailsCard() {
  return (
    <>
      <div className="dsc-card dsc-mb-20">
        <div className="dsc-product-details-top dsc-line-bottom">
          <img id="product-image" src={notebookImage} alt="notbook" />
        </div>

        <div className="dsc-product-details-bottom">
          <h3>R$ 5000,00</h3>
          <h4>Notebook LG</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            tenetur dolores libero reiciendis, nihil nulla qui at sit ipsam
            laboriosam maxime iure? Numquam, provident exercitationem! Ab magni
            culpa accusamus eveniet.rendis? Quisquam. Non eum ut a, aliquam
            eveniet id ullam, dign.
          </p>
          <div className="dsc-card-tags">
            <ProductCategory text="Computadores" />
            <ProductCategory text="Eletronicos" />
          </div>
        </div>
      </div>
    </>
  );
}
