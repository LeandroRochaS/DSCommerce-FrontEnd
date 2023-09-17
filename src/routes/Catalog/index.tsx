import ButtonNextPage from "../../components/ButtonNextPage";
import CatalogCard from "../../components/CatalogCard";
import HeaderClient from "../../components/HeaderClient";
import SearchBar from "../../components/SearchBar";
import "./styles.scss";

export default function Catalog() {
  return (
    <>
      <HeaderClient />

      <main className="dsc-container">
        <div className="dsc-mt-20">
          <SearchBar />
        </div>

        <section id="catalog-section" className="dsc-catalog">
          <div className="dsc-catalog-cards dsc-mb-20 dsc-mt-20">
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
          </div>

          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
