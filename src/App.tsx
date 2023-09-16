import "./styles/details.scss";
import Notbook from "./assets/images/portatil-colorido_78370-510 (1).png";
import Cart from "./assets/images/cart.svg";

function App() {
  return (
    <>
      <header className="dsc-header-client">
        <nav className="dsc-container">
          <div className="menu-content">
            <h1>DSCommerce</h1>
            <div className="dsc-navbar-right">
              <div className="dsc-menu-items-container">
                <div className="dsc-menu-item">
                  <img alt="Carrinho" src={Cart} />
                </div>
              </div>
              <a href="#"> Entrar </a>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section
          id="dsc-product-details-section"
          className="dsc-container dsc-product-details-section"
        >
          <div className="dsc-card dsc-mb-20">
            <div className="dsc-product-details-top dsc-line-bottom">
              <img id="product-image" src={Notbook} alt="notbook" />
            </div>

            <div className="dsc-product-details-bottom">
              <h3>R$ 5000,00</h3>
              <h4>Notebook LG</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                tenetur dolores libero reiciendis, nihil nulla qui at sit ipsam
                laboriosam maxime iure? Numquam, provident exercitationem! Ab
                magni culpa accusamus eveniet.rendis? Quisquam. Non eum ut a,
                aliquam eveniet id ullam, dign.
              </p>
              <div className="dsc-card-tags">
                <div className="dsc-card-category">Eletrônicos</div>
                <div className="dsc-card-category">Computadores</div>
              </div>
            </div>
          </div>

          <div className="dsc-btn-page-container">
            <div className="dsc-btn dsc-btn-blue dsc-mt-20">Comprar</div>
            <div className="dsc-btn dsc-btn-white">Início</div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
