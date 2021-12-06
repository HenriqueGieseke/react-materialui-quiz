import { Container, Modal, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import ResultsCard from '../ResultsCard/ResultsCard';
import ResultsModal from '../ResultsModal/ResultsModal';
import useStyles from './styles';

const QuizReportContent = () => {
  const classes = useStyles();
  const [modalStatus, setModalStatus] = useState(false);

  const modalToggle = () => {
    setModalStatus(!modalStatus);
  };

  return (
    <main>
      <Typography className={classes.title} align="center" variant="h4">
        Saved Results
      </Typography>

      <Container align="center">
        <ResultsCard modalToggle={modalToggle} />
        <ResultsCard modalToggle={modalToggle} />
        <ResultsCard modalToggle={modalToggle} />
        <ResultsCard modalToggle={modalToggle} />
        <ResultsCard modalToggle={modalToggle} />
      </Container>
      <Modal
        open={modalStatus}
        onClose={modalToggle}
        className={classes.modal}
        align="center"
      >
        <ResultsModal />
      </Modal>
    </main>
  );
};

export default QuizReportContent;
