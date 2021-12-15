import { Container, Modal, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import ResultsCard from '../ResultsCard/ResultsCard';
import ResultsModal from '../ResultsModal/ResultsModal';
import useStyles from './styles';

const QuizReportContent = () => {
  const classes = useStyles();
  const [modalStatus, setModalStatus] = useState(false);
  const [quizReports, setQuizReports] = useState(
    JSON.parse(localStorage.getItem('quizReports'))
  );
  const [selectedReport, setSelectedReport] = useState([]);

  console.log('QUIZ REPORTS ', quizReports);

  const modalToggle = () => {
    setModalStatus(!modalStatus);
  };

  return (
    <main>
      <Typography className={classes.title} align="center" variant="h4">
        Saved Results
      </Typography>

      <Container align="center">
        {quizReports.reports.map((report) => (
          <ResultsCard
            report={report}
            key={report[0][0].description}
            modalToggle={modalToggle}
            setSelectedReport={setSelectedReport}
          />
        ))}
      </Container>
      <Modal
        open={modalStatus}
        onClose={modalToggle}
        className={classes.modal}
        align="center"
      >
        <ResultsModal answers={selectedReport} />
      </Modal>
    </main>
  );
};

export default QuizReportContent;
