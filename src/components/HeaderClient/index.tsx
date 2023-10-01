import { Link } from "react-router-dom";
import cartIcon from "../../assets/images/cart.svg";
import "./styles.scss";

export default function HeaderClient() {
  return (
    <>
      <header className="dsc-header-client">
        <nav className="dsc-container">
          <div className="menu-content">
            <Link to="/">
              <h1>DSCommerce</h1>
            </Link>
            <div className="dsc-navbar-right">
              <div className="dsc-menu-items-container">
                <div className="dsc-menu-item">
                  <img alt="Carrinho" src={cartIcon} />
                </div>
              </div>{" "}
              <a> Entrar</a>{" "}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
