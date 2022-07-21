import { useState } from "react";
import Alert from "./Alert";

const Formulario = ({pacientes, setPacientes}) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [alert, setAlert] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, fecha, email, sintomas].includes('')) {
        setAlert('danger');
        return ;
    }

    const objetoPaciente = {
        id: generarId(),
        nombre,
        propietario,
        email,
        fecha,
        sintomas
    }

    setPacientes([...pacientes, objetoPaciente]);
    setAlert('success');
    setTimeout(() => {
        setAlert('');
    }, 2000);

    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const hoy = Date.now().toString(36);

    return random + hoy;

  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="text-4xl font-bold text-black text-center">
        Seguimiento Paciente
      </h2>
      <p className="text-center mt-4 mb-8">
        Añade Pacientes y {""}
        <span className="text-indigo-600">Administralos</span>
      </p>

      <form 
        className="bg-gray-200 shadow-2xl rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {alert !== '' &&
        <Alert alert={alert}/>
        }
        <div className="mb-4">
          <label className="block font-bold text-indigo-600" htmlFor="nombre">
            NOMBRE MASCOTA:
          </label>
          <input
            id="nombre"
            type="text"
            className="w-full p-2 mt-1 rounded-md placeholder-gray-400"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-bold text-indigo-600"
            htmlFor="propietario"
          >
            PROPIETARIO MASCOTA:
          </label>
          <input
            id=" propietario"
            type="text"
            className="w-full p-2 mt-1 rounded-md placeholder-gray-400"
            placeholder="Propietario de la mascota"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold text-indigo-600" htmlFor="email">
            EMAIL PROPIETARIO:
          </label>
          <input
            id="email"
            type="text"
            className="w-full p-2 mt-1 rounded-md placeholder-gray-400"
            placeholder="Email del propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold text-indigo-600" htmlFor="fecha">
            FECHA ALTA:
          </label>
          <input
            id="fecha"
            type="date"
            className="w-full p-2 mt-1 rounded-md placeholder-gray-400"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold text-indigo-600" htmlFor="sintomas">
            SINTOMAS:
          </label>
          <textarea
            id="sintomas"
            type="text"
            className="w-full p-2 mt-1 rounded-md placeholder-gray-400"
            placeholder="Sintomas de la mascota"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          className="bg-indigo-600 w-full text-white font-bold uppercase py-2 rounded cursor-pointer"
          type="submit"
          value="Guardar Paciente"
        />
      </form>
    </div>
  );
};

export default Formulario;
