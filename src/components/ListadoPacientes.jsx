import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:3/5 md:h-sreen overflow-y-scroll">
      {pacientes && pacientes.length > 0 ? (
        <>
          <h2 className="text-4xl font-bold text-black text-center">
            Listado Pacientes
          </h2>
          <p className="text-center mt-4 mb-8">
            Administra tus{""}
            <span className="text-indigo-600">Pacientes y Citas</span>
          </p>
          {pacientes.map( paciente => (
            <Paciente
                key={paciente.id} 
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}    
            />
            
        ))}

        </>
      ) : (
        <>
          <h2 className="text-4xl font-bold text-black text-center">
            Agrega Pacientes y
          </h2>
          <p className="text-center mt-4 mb-8">
            Aparecerán {""}
            <span className="text-indigo-600">en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
