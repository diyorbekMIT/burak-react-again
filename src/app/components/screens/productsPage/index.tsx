// ProductsPage.js
import { Route, Routes, useLocation } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";

export function ProductsPage() {
  const location = useLocation();
  console.log(location);
  
  return (
    <div className="products-page">
      <Routes>
        <Route path=":productId" element={<ChosenProduct />} /> {/* Relative path */}
        <Route path="" element={<Products />} /> {/* Empty path for base route */}
      </Routes>
    </div>
  );
}