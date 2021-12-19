import React, { useState, useContext } from 'react';
import { Button, Container, Modal, Typography, Fade } from '@material-ui/core';
import useStyles from './styles';
import QuestionBox from '../QuestionBox/QuestionBox';
import ResultsModal from '../ResultsModal/ResultsModal';
import { Context } from '../../Context/Context';
import { handleSubmitAnswers } from '../../helpers/handleSubmitAnswers';

const QuizForm = ({ setShowQuiz, questions }) => {
  const classes = useStyles();

  const { answers, setAnswers } = useContext(Context);

  const [modalToggle, setModalToggle] = useState(false);
  const [questionsLength] = useState(questions.length);
  const [answerLength, setAnswerLength] = useState(0);

  return (
    <main>
      <Typography className={classes.title} align="center" variant="h4">
        Good Luck Have Fun
      </Typography>

      <Fade in={true}>
        <Container align="center">
          <Button
            onClick={() => {
              setShowQuiz(false);
              setAnswerLength(0);
              setAnswers([]);
            }}
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Cancel
          </Button>
          <form
            onSubmit={(event) => {
              handleSubmitAnswers(
                event,
                answers,
                setAnswers,
                setModalToggle,
                modalToggle
              );
            }}
          >
            {questions.map((question) => (
              <QuestionBox
                key={question.question}
                questionData={question}
                questionNumber={questions.indexOf(question) + 1}
                setAnswerLength={setAnswerLength}
              />
            ))}
            <Button
              disabled={questionsLength === answerLength ? false : true}
              type="submit"
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Finish
            </Button>
          </form>
        </Container>
      </Fade>
      <Modal
        className={classes.modal}
        open={modalToggle}
        onClose={() => {
          setModalToggle(false);
          setShowQuiz(false);
          setAnswerLength(0);
          setAnswers([]);
        }}
        align="center"
      >
        <ResultsModal
          answers={answers}
          setModalToggle={setModalToggle}
          setShowQuiz={setShowQuiz}
          setAnswerLength={setAnswerLength}
          setAnswers={setAnswers}
        />
      </Modal>
    </main>
  );
};

export default QuizForm;
