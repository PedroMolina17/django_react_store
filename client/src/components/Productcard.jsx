import PropTypes from "prop-types";
const Productcard = ({
  imagen,
  nombre,
  id,
  additionalClass,
  precio,
  onAddToCart,
}) => {
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
        <button
          className="border p-4 bg-gradient-to-br text-md rounded-md text-white from-[#c0b8ec] to-[#6d57e2] hover:from-[#6d57e2] hover:to-[#6d57e2]"
          onClick={onAddToCart}
        >
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
  additionalClass: PropTypes.any,
  precio: PropTypes.any.isRequired,
  onAddToCart: PropTypes.func,
};

export default Productcard;
