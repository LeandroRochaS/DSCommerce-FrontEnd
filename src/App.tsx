import NotFound from "./routes/NotFound";
import ProductDetails from "./routes/ClientHome/ProductDetails";
import { Route, Routes } from "react-router-dom";
import ClientHome from "./routes/ClientHome";
import Catalog from "./routes/ClientHome/Catalog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<Catalog />} />
          <Route path="catalog" element={<Catalog />} />
          <Route
            path="product-details/:productIdString"
            element={<ProductDetails />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
