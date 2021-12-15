import React from 'react';
import { Card, CardContent, Typography, Container } from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import useStyles from './styles';

const ResultsQuestionBox = ({ answerData }) => {
  const classes = useStyles();

  return (
    <Card align="start" variant="outlined" className={classes.card}>
      <CardContent>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          {answerData.description.replace(/&quot;/g, '"')}
        </Typography>
      </CardContent>
      <CardContent>
        {answerData.answers.map((answer) => (
          <Container key={answer} className={classes.answerContainer}>
            <Typography gutterBottom variant="body2">
              {answer}
            </Typography>
            {answer === answerData.userAnswer &&
            answer !== answerData.correctAnswer ? (
              <div className={classes.answerContainer}>
                <KeyboardArrowLeftIcon color="primary" fontSize="small" />
                <Typography color="primary" variant="subtitle2">
                  Your answer
                </Typography>
              </div>
            ) : null}
            {answer === answerData.correctAnswer &&
            answer !== answerData.userAnswer ? (
              <div className={classes.answerContainer}>
                <KeyboardArrowLeftIcon color="primary" fontSize="small" />
                <Typography color="primary" variant="subtitle2">
                  Correct answer
                </Typography>
              </div>
            ) : null}
            {answer === answerData.correctAnswer &&
            answer === answerData.userAnswer ? (
              <div className={classes.answerContainer}>
                <KeyboardArrowLeftIcon color="primary" fontSize="small" />
                <Typography color="primary" variant="subtitle2">
                  Your correct answer
                </Typography>
              </div>
            ) : null}
          </Container>
        ))}
      </CardContent>
    </Card>
  );
};

export default ResultsQuestionBox;
