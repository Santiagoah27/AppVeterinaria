import Patient from "./Patient";
const ListPa = ({ patients, setPatient, deletePatient}) => {  
return (
    <div className="w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {patients.map((patient) => (
            <Patient 
               key = {patient.id} 
               patient = {patient}
               setPatient = {setPatient}
               deletePatient = {deletePatient}
                />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListPa;
