import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import InstructorManagement from './pages/UserManagement/InstructorManagement.jsx'; // Create InstructorManagement.jsx component
import CountryAdmin from './pages/UserManagement/CountryAdmin.jsx'; // Create CountryAdmin.jsx component
import Countries from './pages/Countries.jsx';
import CenterManagement from './pages/CenterManagement.jsx';
import AudioFileManagement from './pages/AudioFileManagement.jsx';
import CustomNotification from './pages/CustomNotification.jsx';
import Report from './pages/Report.jsx';
import FeedbackReceived from './pages/FeedbackReceived.jsx';
import ContentManagement from './pages/ContentManagement.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route
            path="/UserManagement"
            element={
              <>
                <Route path="InstructorManagement" element={<InstructorManagement />} />
                <Route path="CountryAdmin" element={<CountryAdmin />} />
              </>
            }
          />
          <Route path="/CenterManagement" element={<CenterManagement />} />
          <Route path="/Countries" element={<Countries />} />
          <Route path="/AudioFileManagement" element={<AudioFileManagement />} />
          <Route path="/CustomNotification" element={<CustomNotification />} />
          <Route path="/Report" element={<Report />} />
          <Route path="/FeedbackReceived" element={<FeedbackReceived />} />
          <Route path="/ContentManagement" element={<ContentManagement />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
