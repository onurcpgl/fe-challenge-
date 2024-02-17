import { Routes, Route } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import ProductDetail from "../pages/Product/ProductDetail";

function AppRoute() {
  return (
    <Routes>
      <Route>
        <Route path="" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoute;
