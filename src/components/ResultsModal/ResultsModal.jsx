import { Container, Typography, Card, Button } from '@material-ui/core';
import React from 'react';
import QuestionBox from '../QuestionBox/QuestionBox';
import useStyles from './styles';

const ResultsModal = () => {
  const classes = useStyles();

  return (
    <Container className={classes.modalContainer}>
      <Typography gutterBottom variant="h4">
        Results
      </Typography>
      <Typography gutterBottom color="textSecondary" variant="subtitle1">
        This results are saved in the Quiz Reports section
      </Typography>
      <Card
        align="start"
        variant="outlined"
        className={classes.resultsContainer}
      >
        <Typography gutterBottom variant="subtitle2">
          Correct answers: 4
        </Typography>
        <Typography gutterBottom variant="subtitle2">
          Incorrect answers: 5
        </Typography>
      </Card>
      <QuestionBox />
      <QuestionBox />
      <QuestionBox />
      <QuestionBox />
      <QuestionBox />
      <QuestionBox />
      <QuestionBox />
      <QuestionBox />
      <Button variant="contained" color="primary">
        Home
      </Button>
    </Container>
  );
};

export default ResultsModal;
