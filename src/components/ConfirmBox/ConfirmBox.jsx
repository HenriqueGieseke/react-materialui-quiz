import {
  Box,
  Button,
  Container,
  Typography,
  CircularProgress,
  Fade,
} from '@material-ui/core';
import useStyles from './styles';
import React, { useState } from 'react';
import { requestQuestions } from '../../services/requestQuestions';

const ConfirmBox = ({
  questionsNumber,
  setQuestions,
  setShowQuiz,
  setShowConfirmBox,
}) => {
  const classes = useStyles();
  const [loadingStatus, setLoadingStatus] = useState(false);

  const handleStart = async () => {
    setLoadingStatus(true);
    const { results } = await requestQuestions(questionsNumber);
    setQuestions(results);
    setShowQuiz(true);
    setLoadingStatus(false);
    setShowConfirmBox(false);
  };

  return (
    <Container align="center">
      <Fade in={true}>
        <Box boxShadow={1} className={classes.buttonsBox}>
          <Typography
            gutterBottom
            variant="h6"
            align="center"
            color="textSecondary"
          >
            Start quiz with {questionsNumber} questions?
          </Typography>

          {loadingStatus && <CircularProgress />}
          <Container style={{ marginTop: '1rem' }} align="center">
            <Button
              onClick={() => {
                handleStart();
              }}
              disabled={loadingStatus}
              style={{ marginRight: '1rem' }}
              variant="contained"
              color="primary"
            >
              Start
            </Button>
            <Button
              onClick={() => {
                setShowConfirmBox(false);
              }}
              disabled={loadingStatus}
              variant="contained"
              color="primary"
            >
              Cancel
            </Button>
          </Container>
        </Box>
      </Fade>
    </Container>
  );
};

export default ConfirmBox;
