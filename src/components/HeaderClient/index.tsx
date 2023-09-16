import cartIcon from "../../assets/images/cart.svg";
import "./styles.scss";

export default function HeaderClient() {
  return (
    <>
      <header className="dsc-header-client">
        <nav className="dsc-container">
          <div className="menu-content">
            <h1>DSCommerce</h1>
            <div className="dsc-navbar-right">
              <div className="dsc-menu-items-container">
                <div className="dsc-menu-item">
                  <img alt="Carrinho" src={cartIcon} />
                </div>
              </div>
              <a href="#"> Entrar </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
