import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "../../styles/historyPatients.css";
import { Patient } from "../../features/medicalHistory/medicalHistorySlice";

type Props = {
  users: Patient[];
};

const PatientList: React.FC = () => {
  const users = useSelector(
    (store: RootState) => store.medicalhistory.medicalHistoryData
  );
  return (
    <div className="grid-container">
      <h2>History</h2>
      <br />
      <div className="card">
        <h2>Name</h2>
        <h2>Diagnosis</h2>
        <h2>Gender</h2>
        <h2>Last Visit</h2>
        <h2>Age</h2>
      </div>
      {users.map((patient) => (
        <div key={patient.id} className="card">
          <p>{patient.name}</p>
          <p>{patient.Diagnosis}</p>
          <p>{patient.Gender}</p>
          <p>{patient.Last_visit}</p>
          <p>{patient.Age}</p>
        </div>
      ))}
    </div>
  );
};

export default PatientList;
