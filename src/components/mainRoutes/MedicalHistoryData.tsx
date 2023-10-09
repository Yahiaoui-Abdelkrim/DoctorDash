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
      {users.map((patient) => (
        <div key={patient.id} className="card">
          <h2>{patient.name}</h2>
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
