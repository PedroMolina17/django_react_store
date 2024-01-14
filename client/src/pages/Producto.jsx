import { useEffect, useState } from "react";
import { getAllStoreByCategoria } from "../api/producto.api";
import Productcard from "../components/Productcard";

export default function Producto() {
  const [store, setStore] = useState([]);

  useEffect(() => {
    async function loadStore() {
      const res = await getAllStoreByCategoria();
      setStore(res.data);
      console.log(res.data);
    }

    loadStore();
  }, []);

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
            />
          ))}
      </div>
    </div>
  );
}
