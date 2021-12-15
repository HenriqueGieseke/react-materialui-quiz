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
    if (answer.correctAnswer === answer.userAnswer) {
      correct++;
    } else if (answer.correctAnswer !== answer.userAnswer) {
      wrong++;
    }
  });

  const report = [[...answers], { correct, wrong }];

  const quizReports = localStorage.getItem('quizReports');

  if (quizReports === null) {
    const reportObj = {
      reports: [[[...answers], { correct, wrong }]],
    };
    localStorage.setItem('quizReports', JSON.stringify(reportObj));

    console.log(JSON.parse(localStorage.getItem('quizReports')));
    setAnswers(report);
    setModalToggle(!modalToggle);
  } else {
    const reports = JSON.parse(localStorage.getItem('quizReports'));

    const newReportObj = {
      reports: [[[...answers], { correct, wrong }], ...reports.reports],
    };

    localStorage.setItem('quizReports', JSON.stringify(newReportObj));

    console.log(answers);
    console.log(JSON.parse(localStorage.getItem('quizReports')));
    setAnswers(report);
    setModalToggle(!modalToggle);
  }
};

export { handleSubmitAnswers };
