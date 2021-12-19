import { Container, Typography, Card, Button, Fade } from '@material-ui/core';
import React from 'react';
import { useLocation } from 'react-router-dom';
import ResultsQuestionBox from '../ResultsQuestionBox/ResultsQuestionBox';
import useStyles from './styles';

const ResultsModal = ({
  answers,
  setModalToggle,
  setShowQuiz,
  setAnswerLength,
  setAnswers,
  setModalStatus,
}) => {
  const classes = useStyles();

  const location = useLocation().pathname;

  return (
    <Fade in={true}>
      <Container className={classes.modalContainer}>
        <Typography gutterBottom variant="h4">
          Results
        </Typography>
        {location === '/' ? (
          <Typography gutterBottom color="textSecondary" variant="subtitle1">
            These results are saved in the Quiz Results section
          </Typography>
        ) : null}

        <Card
          align="start"
          variant="outlined"
          className={classes.resultsContainer}
        >
          <Typography gutterBottom variant="subtitle2">
            Correct answers: {answers[1].correct}
          </Typography>
          <Typography gutterBottom variant="subtitle2">
            Incorrect answers: {answers[1].wrong}
          </Typography>
        </Card>
        {answers[0].map((answer) => (
          <ResultsQuestionBox key={answer.description} answerData={answer} />
        ))}
        {location === '/' ? (
          <Button
            onClick={() => {
              setModalToggle(false);
              setShowQuiz(false);
              setAnswerLength(0);
              setAnswers([]);
            }}
            variant="contained"
            color="primary"
          >
            Home
          </Button>
        ) : (
          <Button
            onClick={() => {
              setModalStatus();
            }}
            variant="contained"
            color="primary"
          >
            Back
          </Button>
        )}
      </Container>
    </Fade>
  );
};

export default ResultsModal;
