import ProductDetailsCard from "./components/ProductDetailsCard";
import ButtonPrimary from "./components/ButtonPrimary";
import ButtonInverse from "./components/ButtonInverse";
import HeaderClient from "./components/HeaderClient";

function App() {
  return (
    <>
      <HeaderClient />
      <main>
        <section
          id="dsc-product-details-section"
          className="dsc-container dsc-product-details-section"
        >
          <ProductDetailsCard />
          <div className="dsc-btn-page-container">
            <ButtonPrimary text="Comprar" />
            <ButtonInverse text="Início" />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
