import { useEffect, useState } from "react";
import { getAllStore } from "../api/store.api";

export function StoreList() {
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
      <div className="flex justify-center ">
        <h1 className="text-4xl p-4">Productos</h1>{" "}
      </div>
      <div className="m-10 grid grid-cols-5 gap-7 max-md:grid-cols-1 text-center">
        {store.map((store) => (
          <div key={store.id} className="border">
            <h1 className="m-0 p-0">{store.nombre}</h1>
            <img
              className=""
              src={store.imagen}
              alt={store.nombre}
              width={200}
              height={200}
            />
            <button className="border p-4 bg-gradient-to-br text-md  rounded-md text-white from-[#f67ce0] to-[#cf2aad]">
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
