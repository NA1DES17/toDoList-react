import PropTypes from "prop-types";
import "../hojas-de-estilo/Tarea.css";
import {IoIosCloseCircleOutline} from "react-icons/io";

function Tarea({id, texto, completada, completarTarea, eliminarTarea}) {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div
        className="tarea-texto"
        onClick={() => {
          completarTarea(id);
        }}
      >
        {texto}
      </div>

      <div className="tarea-conenedor-iconos">
        <IoIosCloseCircleOutline
          className="tarea-icono"
          onClick={() => eliminarTarea(id)}
        />
      </div>
    </div>
  );
}

Tarea.propTypes = {
  texto: PropTypes.string.isRequired,
  completada: PropTypes.bool,
  id: PropTypes.string,
  completarTarea: PropTypes.func,
  eliminarTarea: PropTypes.func,
};

export default Tarea;
