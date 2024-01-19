import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Store from "./pages/Store";
import StoreForm from "./pages/StoreForm";
import Navigation from "./components/Navigation";
import Product from "./pages/Product";
import Producto from "./pages/Producto";
import Games from "./pages/Games";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <div className="container mx-auto mt-24 ">
          <Routes>
            <Route path="/" element={<Navigate to="/store" />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store-create" element={<StoreForm />} />
            <Route path="/games" element={<Games />} />
            <Route path="/products" element={<Product />} />
            <Route path="/productos" element={<Producto />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
