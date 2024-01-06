import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Store from "./pages/Store";
import StoreForm from "./pages/StoreForm";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <div className="container mx-auto px-12 ">
          <Routes>
            <Route path="/" element={<Navigate to="/store" />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store-create" element={<StoreForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
