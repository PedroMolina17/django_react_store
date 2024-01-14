import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStoreByCategoria } from "../api/producto.api";
import Productcard from "../components/Productcard";
import { addToCart } from "../features/product/cartSlice";

export default function Producto() {
  const [store, setStore] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadStore() {
      try {
        const res = await getAllStoreByCategoria();
        setStore(res.data);
      } catch (error) {
        console.error("Error loading store:", error);
      }
    }

    loadStore();
  }, []);

  const handleAddToCart = (store) => {
    dispatch(addToCart(store));
  };
  console.log(useSelector((state) => state.cart.cartItems));

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-4xl p-4">Productos</h1>
      </div>
      <div className="m-10 grid grid-cols-4 gap-6 max-md:grid-cols-1 text-center">
        {store &&
          store.map((storeitem) => (
            <Productcard
              key={storeitem.id}
              imagen={"http://localhost:8000/" + storeitem.imagen}
              nombre={storeitem.nombre}
              id={storeitem.id}
              precio={storeitem.precio}
              additionalClass="py-2"
              onAddToCart={() => handleAddToCart(storeitem)}
            />
          ))}
      </div>
    </div>
  );
}
