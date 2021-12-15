const handleAnswerSelection = (
  event,
  questionData,
  groupedAnswers,
  correctAnswer,
  answers,
  setAnswers,
  setAnswerLength
) => {
  const questionReport = {
    description: questionData.question,
    answers: groupedAnswers,
    correctAnswer,
    userAnswer: event.target.value,
  };

  const checkSecondAnswer = answers.filter((obj) => {
    return obj.description === questionReport.description;
  });

  if (checkSecondAnswer.length === 0) {
    const dirtyArray = [...answers, questionReport];

    const arrayWithoutUndefined = dirtyArray.filter((obj) => {
      return obj.userAnswer !== undefined;
    });

    setAnswers(arrayWithoutUndefined);
    setAnswerLength(arrayWithoutUndefined.length);
  } else {
    const answerArray = answers;
    const answerReportIndex = answerArray.findIndex((obj) => {
      return obj.description === questionReport.description;
    });
    const arrayObj = answers[answerReportIndex];
    arrayObj.userAnswer = event.target.value;
    answerArray[answerReportIndex] = arrayObj;
    console.log('inside question', answerArray.length);
    setAnswerLength(answerArray.length);

    setAnswers(answerArray);
    console.log('CONTEXT UPDATE ', answers);
  }
};

export { handleAnswerSelection };
