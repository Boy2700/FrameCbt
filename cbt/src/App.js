import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import TakeExamPage from './Components/TakeExamPage';
import ExamResultPage from './Components/ExamResultPage';
import ExamHistoryPage from './Components/ExamHistoryPage';
import NotificationPage from './Components/NotificationPage';
import AppBar from  './Components/AppBar';

const App = () => {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/take-exam" element={<TakeExamPage />} />
        <Route path="/exam-result" element={<ExamResultPage />} />
        <Route path="/exam-history" element={<ExamHistoryPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
