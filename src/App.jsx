import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PacientList from "./components/ListPa";

function App() {

  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) ?? []);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  const deletePatient = id => {
    const updatedPatients = patients.filter( patient => patient.id !== id)
    setPatients(updatedPatients)
  }

  return (
    <div className="container mx-auto mt-20">
       <Header />
       <div className="mt-12 flex">
          <Form 
             patients = {patients}
             setPatients = {setPatients}
             patient = {patient}
             setPatient ={setPatient} 
          />
          <PacientList 
           patients = {patients}
           setPatient = {setPatient}
           deletePatient = {deletePatient}
          />
          
       </div>
    </div>
  );
}

export default App;
