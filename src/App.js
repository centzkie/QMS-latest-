import "./App.css";
import Landing from "./Landing";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import GenerateFormAcad from "./Pages/GenerateFormAcad";
import GenerateFormReg from "./Pages/GenerateFormReg";
import TransactionReg from "./Pages/TransactionReg";
import TransactionAcad from "./Pages/TransactionAcad";
import AControll from "./Pages/AcadheadAdmin/Controll";
import AAnnouncement from "./Pages/AcadheadAdmin/Announcement";
import AMonitor from "./Pages/AcadheadAdmin/MonitorAcad";
import AReport from "./Pages/AcadheadAdmin/Report";
import RControll from "./Pages/RegistrarAdmin/Controll";
import RAnnouncement from "./Pages/RegistrarAdmin/Announcement";
import RMonitor from "./Pages/RegistrarAdmin/MonitorReg";
import RReport from "./Pages/RegistrarAdmin/Report";
import GenerateAcad from "./Pages/GenerateAcad";
import GenerateReg from "./Pages/GenerateReg";
import PrivateRoutes from "./PrivateRoutes";
import AArchieve from "./Pages/AcadheadAdmin/Archieve"
import RArchieve from "./Pages/RegistrarAdmin/Archieve"
import Login from "./Pages/Login";
import Notfound from "./Pages/Notfound";
function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* Acad head */}
          <Route path="transaction-acad" element={<TransactionAcad />} />
          <Route path="generate-acad" element={<GenerateAcad />} />
          <Route path="generateform-acad" element={<GenerateFormAcad />} />

          {/* Registrar */}
          <Route path="transaction-reg" element={<TransactionReg />} />
          <Route path="generate-reg" element={<GenerateReg />} />
          <Route path="generateform-reg" element={<GenerateFormReg />} />

          {/* Admin */}
          <Route path="admin" element={ <Login />} />

            {/* Acad head Admin*/}
            <Route path="acad-head-controll" element={<AControll />} />
            <Route path="acad-head-announcement" element={<AAnnouncement />} />
            <Route path="acad-head-report" element={<AReport />} />
            <Route path="acad-head-monitor" element={<AMonitor />} />
            <Route path="acad-head-archive" element={<AArchieve />} />

            {/* Registrar Admin*/}
            <Route path="reg-controll" element={<RControll />} />
            <Route path="reg-announcement" element={<RAnnouncement />} />
            <Route path="reg-report" element={<RReport />} />
            <Route path="reg-monitor" element={<RMonitor />} />
            <Route path="reg-archive" element={<RArchieve />} />

            
         
          
          {/* Excess */}
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
