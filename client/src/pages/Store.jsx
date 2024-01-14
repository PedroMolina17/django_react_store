import { useEffect, useState } from "react";
import { getAllStore } from "../api/store.api";
import Productcard from "../components/Productcard";

export default function Store() {
  const [store, setStore] = useState([]);

  useEffect(() => {
    async function loadStore() {
      const res = await getAllStore();
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
              imagen={storeitem.imagen}
              nombre={storeitem.nombre}
              id={storeitem.id}
              precio={storeitem.precio}
            />
          ))}
      </div>
    </div>
  );
}
