import React, { useState } from 'react';

import LandingContent from '../LandingContent/LandingContent';
import QuizForm from '../QuizForm/QuizForm';

const HomeContent = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [questions, setQuestions] = useState([]);

  return (
    <>
      {showQuiz ? (
        <QuizForm questions={questions} setShowQuiz={setShowQuiz} />
      ) : (
        <LandingContent setQuestions={setQuestions} setShowQuiz={setShowQuiz} />
      )}
    </>
  );
};

export default HomeContent;
