import PropTypes from "prop-types";
const Productcard = ({ imagen, nombre, id }) => {
  return (
    <div>
      <div key={id} className="border ">
        <h1 className="m-0 p-0">{nombre}</h1>
        <img
          className="items-center justify-center mx-auto"
          src={imagen}
          alt={nombre}
          width={200}
          height={200}
        />
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
};

export default Productcard;
