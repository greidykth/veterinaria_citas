const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente;

    function handleEliminarPaciente() {
        if ( confirm(`Esta seguro de eliminar el paciente ${nombre}`)) {
            eliminarPaciente(id)
        }
    }

  return (
    <div className="rounded-xl shadow-md border p-5 m-3">
        <p className="font-bold mb-2 text-indigo-600 uppercase">Nombre: {''}
            <span className="font-normal normal-case text-gray-700">{nombre}</span>
        </p>
        <p className="font-bold mb-2 text-indigo-600 uppercase">Propietario: {''}
            <span className="font-normal normal-case text-gray-700">{propietario}</span>
        </p>
        <p className="font-bold mb-2 text-indigo-600 uppercase">Email: {''}
            <span className="font-normal normal-case text-gray-700">{email}</span>
        </p>
        <p className="font-bold mb-2 text-indigo-600 uppercase">Fecha: {''}
            <span className="font-normal normal-case text-gray-700">{fecha}</span>
        </p>
        <p className="font-bold mb-2 text-indigo-600 uppercase">Sintomas: {''}
            <span className="font-normal normal-case text-gray-700">{sintomas}</span>
        </p>
        <div className="flex justify-end">
            <button className="bg-indigo-600 p-2 text-white uppercase font-bold rounded-md mr-3"
                onClick={() => setPaciente(paciente)}>
                Editar
            </button>
            <button className="bg-red-600 p-2 text-white uppercase font-bold rounded-md"
                onClick={handleEliminarPaciente}>
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default Paciente