const handleSubmitAnswers = (
  event,
  answers,
  setAnswers,
  setModalToggle,
  modalToggle
) => {
  event.preventDefault();

  let correct = 0;
  let wrong = 0;
  answers.forEach((answer) => {
    console.log('correct', answer.correctAnswer);
    console.log('user', answer.userAnswer);
    if (answer.correctAnswer === answer.userAnswer) {
      correct++;
      console.log('entrou correct ', correct);
    } else if (answer.correctAnswer !== answer.userAnswer) {
      wrong++;
      console.log('entrou wrong ', wrong);
    }
  });
  setAnswers([[...answers], { correct, wrong }]);
  console.log(answers);
  setModalToggle(!modalToggle);
};

export { handleSubmitAnswers };
