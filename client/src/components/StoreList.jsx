import { useEffect, useState } from "react";
import { getAllStore } from "../api/store.api";
import Productcard from "./Productcard";

export function StoreList() {
  const [store, setStore] = useState([]);

  useEffect(() => {
    async function loadStore() {
      const res = await getAllStore();
      setStore(res.data);
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
            />
          ))}
      </div>
    </div>
  );
}
