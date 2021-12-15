import React, { useContext, useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';

import useStyles from './styles';
import { groupAnswers } from '../../helpers/groupAnswers';
import { Context } from '../../Context/Context';
import { handleAnswerSelection } from '../../helpers/handleAnswerSelection';

const QuestionBox = ({ questionData, questionNumber, setAnswerLength }) => {
  const [correctAnswer] = useState(questionData.correct_answer);
  const [groupedAnswers] = useState(
    groupAnswers(questionData.correct_answer, questionData.incorrect_answers)
  );

  const { answers, setAnswers } = useContext(Context);

  const classes = useStyles();
  return (
    <Card align="start" variant="outlined" className={classes.card}>
      <CardContent>
        <Typography color="textSecondary" variant="h6" component="h2">
          Question {questionNumber}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {questionData.question}
        </Typography>
      </CardContent>
      <CardActions>
        <RadioGroup
          required
          name="options"
          role="group"
          options={groupedAnswers}
        >
          {groupedAnswers.map((answer) => (
            <FormControlLabel
              key={answer}
              control={<Radio />}
              label={answer}
              value={answer}
              onClick={(event) => {
                handleAnswerSelection(
                  event,
                  questionData,
                  groupedAnswers,
                  correctAnswer,
                  answers,
                  setAnswers,
                  setAnswerLength
                );
              }}
            />
          ))}
        </RadioGroup>
      </CardActions>
    </Card>
  );
};

export default QuestionBox;
