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
      {store.map((store) => (
        <div key={store.id}>
          <h1>{store.nombre}</h1>
          <img src={store.imagen} alt={store.nombre} />
          <div>{store.imagen}</div>
          <img
            src="../../../producto_imagenes/rmp365fypu_izquierda.jpg"
            alt={store.nombre}
          />
          <img
            src="/../../../producto_imagenes/rmp365fypu_izquierda.jpg"
            alt={store.nombre}
          />
          <img
            src="../../producto_imagenes/rmp365fypu_izquierda.jpg"
            alt={store.nombre}
          />
        </div>
      ))}
    </div>
  );
}
