import React, { useState } from 'react';

import LandingContent from '../LandingContent/LandingContent';
import QuizForm from '../QuizForm/QuizForm';
import ConfirmBox from '../ConfirmBox/ConfirmBox';

const HomeContent = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionsNumber, setQuestionsNumber] = useState(0);
  const [showConfirmBox, setShowConfirmBox] = useState(false);

  if (showQuiz) {
    return <QuizForm questions={questions} setShowQuiz={setShowQuiz} />;
  } else if (showConfirmBox) {
    return (
      <ConfirmBox
        questionsNumber={questionsNumber}
        setQuestions={setQuestions}
        setShowQuiz={setShowQuiz}
        setShowConfirmBox={setShowConfirmBox}
      />
    );
  } else {
    return (
      <LandingContent
        setQuestionsNumber={setQuestionsNumber}
        setShowConfirmBox={setShowConfirmBox}
      />
    );
  }
};

export default HomeContent;
