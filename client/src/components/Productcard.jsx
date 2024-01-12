import PropTypes from "prop-types";
const Productcard = ({ imagen, nombre, id, additionalClass, precio }) => {
  return (
    <div>
      <div key={id} className="border ">
        <h1 className="m-0 p-0 text-2xl">{nombre}</h1>
        <img
          className={` items-center justify-center mx-auto ${additionalClass}`}
          src={imagen}
          alt={nombre}
          style={{ width: "200px", height: "200px", objectFit: "cover" }}
        />
        <h1 className="py-3 text-sm font-bold">{precio}</h1>
        <button className="border p-4 bg-gradient-to-br text-md rounded-md text-white from-[#f67ce0] to-[#cf2aad] hover:from-[#cf2aad] hover:to-[#cf2aad]">
          Comprar
        </button>
      </div>
    </div>
  );
};

Productcard.propTypes = {
  imagen: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  id: PropTypes.any.isRequired,
  additionalClass: PropTypes.any.isRequired,
  precio: PropTypes.any.isRequired,
};

export default Productcard;
