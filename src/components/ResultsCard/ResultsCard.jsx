import React from 'react';
import { Card, Typography } from '@material-ui/core';
import useStyles from './styles';

const ResultsCard = ({ modalToggle, report, setSelectedReport }) => {
  const classes = useStyles();
  return (
    <Card
      onClick={() => {
        setSelectedReport(report);
        modalToggle();
      }}
      className={classes.resultsContainer}
      align="start"
      variant="outlined"
    >
      <Typography color="textSecondary" gutterBottom variant="subtitle2">
        Number of questions: {report[0].length}
      </Typography>
      <Typography color="primary" gutterBottom variant="subtitle2">
        Correct answers: {report[1].correct}
      </Typography>
      <Typography color="textSecondary" gutterBottom variant="subtitle2">
        Incorrect answers: {report[1].wrong}
      </Typography>
    </Card>
  );
};

export default ResultsCard;
