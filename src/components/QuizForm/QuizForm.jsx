import React from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@material-ui/core';
import useStyles from './styles';
import QuestionBox from '../QuestionBox/QuestionBox';

const QuizForm = () => {
  const classes = useStyles();

  return (
    <main>
      <Typography className={classes.title} align="center" variant="h4">
        Good Luck Have Fun
      </Typography>
      <Container align="center">
        <QuestionBox />
        <QuestionBox />
        <QuestionBox />

        <Button className={classes.button} variant="contained" color="primary">
          Finish
        </Button>
      </Container>
    </main>
  );
};

export default QuizForm;
