import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Appointments from "./components/mainRoutes/Appointments";
import MedicalHistoryData from "./components/mainRoutes/MedicalHistoryData";
import SeeProfile from "./components/mainRoutes/SeeProfile";
import SeeUsers from "./components/mainRoutes/SeeUsers";
import ViewUpdateProfile from "./components/mainRoutes/ViewUpdateProfile";
import Navbar from "./components/layout/Navbar";

const App = () => {
  // const BASE_URL = import.meta.env.REACT_APP_BASE_URL;
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/history" element={<MedicalHistoryData />} />
        <Route path="/Profile" element={<SeeProfile />} />
        <Route path="/Users" element={<SeeUsers />} />
        <Route path="/Update" element={<ViewUpdateProfile />} />
      </Routes>
    </div>
  );
};

export default App;
