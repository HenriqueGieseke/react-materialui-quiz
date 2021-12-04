import React, { useState } from 'react';
import { Button, Container, Modal, Typography } from '@material-ui/core';
import useStyles from './styles';
import QuestionBox from '../QuestionBox/QuestionBox';
import ResultsModal from '../ResultsModal/ResultsModal';

const QuizForm = () => {
  const classes = useStyles();

  const [modalToggle, setModalToggle] = useState(false);

  const changeToggle = () => {
    setModalToggle(!modalToggle);
  };

  return (
    <main>
      <Typography className={classes.title} align="center" variant="h4">
        Good Luck Have Fun
      </Typography>

      <Container align="center">
        <Button className={classes.button} variant="contained" color="primary">
          Cancel
        </Button>
        <QuestionBox />
        <QuestionBox />
        <QuestionBox />

        <Button
          onClick={changeToggle}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Finish
        </Button>
      </Container>
      <Modal
        className={classes.modal}
        open={modalToggle}
        onClose={changeToggle}
        align="center"
      >
        <ResultsModal />
      </Modal>
    </main>
  );
};

export default QuizForm;
