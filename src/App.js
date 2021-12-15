import { CssBaseline } from '@material-ui/core';
import { useState } from 'react';
import { Context } from './Context/Context';
import Home from './pages/Home';
import QuizReports from './pages/QuizReports';

function App() {
  const [answers, setAnswers] = useState([]);

  return (
    <>
      <Context.Provider value={{ answers, setAnswers }}>
        <CssBaseline />
        <Home />
      </Context.Provider>
    </>
  );
}

export default App;
