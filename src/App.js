import { CssBaseline } from '@material-ui/core';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Context } from './Context/Context';
import Home from './pages/Home';
import QuizReports from './pages/QuizReports';

function App() {
  const [answers, setAnswers] = useState([]);

  return (
    <Router>
      <Context.Provider value={{ answers, setAnswers }}>
        <CssBaseline />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/quizReports" exact element={<QuizReports />} />
        </Routes>
      </Context.Provider>
    </Router>
  );
}

export default App;
