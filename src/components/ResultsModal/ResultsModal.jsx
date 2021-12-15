import { Container, Typography, Card, Button } from '@material-ui/core';
import React from 'react';
import ResultsQuestionBox from '../ResultsQuestionBox/ResultsQuestionBox';
import useStyles from './styles';

const ResultsModal = ({
  answers,
  setModalToggle,
  setShowQuiz,
  setAnswerLength,
  setAnswers,
}) => {
  const classes = useStyles();
  console.log(answers);

  return (
    <Container className={classes.modalContainer}>
      <Typography gutterBottom variant="h4">
        Results
      </Typography>
      <Typography gutterBottom color="textSecondary" variant="subtitle1">
        These results are saved in the Quiz Reports section
      </Typography>
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
    </Container>
  );
};

export default ResultsModal;
