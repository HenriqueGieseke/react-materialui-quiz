import React from 'react';
import { Card, Typography } from '@material-ui/core';
import useStyles from './styles';

const ResultsCard = ({ modalToggle }) => {
  const classes = useStyles();
  return (
    <Card
      onClick={modalToggle}
      className={classes.resultsContainer}
      align="start"
      variant="outlined"
    >
      <Typography gutterBottom variant="subtitle1">
        04/12/2020
      </Typography>
      <Typography color="textSecondary" gutterBottom variant="subtitle2">
        Number of questions: 20
      </Typography>
      <Typography color="primary" gutterBottom variant="subtitle2">
        Correct answers: 13
      </Typography>
      <Typography color="textSecondary" gutterBottom variant="subtitle2">
        Incorrect answers: 7
      </Typography>
    </Card>
  );
};

export default ResultsCard;
