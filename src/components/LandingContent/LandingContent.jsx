import React from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@material-ui/core';
import useStyles from './styles';

const LandingContent = () => {
  const classes = useStyles();

  return (
    <main>
      <div className={classes.headerContainer}>
        <Container maxWidth="sm">
          <Typography align="center" variant="h4" gutterBottom>
            General Knowledge quiz
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
          >
            Fun questions of general topics and nerd trivia to challenge your
            knowledge
          </Typography>
        </Container>
      </div>
      <Container align="center">
        <Box boxShadow={1} className={classes.inputBox}>
          <Typography variant="h6" align="center" color="textSecondary">
            How many questions?
          </Typography>
          <TextField
            className={classes.input}
            id="filled-basic"
            label="Questions"
            variant="filled"
            required={true}
            type="number"
            InputProps={{
              inputProps: {
                max: 30,
                min: 1,
              },
            }}
          />
          <Button variant="contained" color="primary">
            Start Quiz
          </Button>
        </Box>
      </Container>
    </main>
  );
};

export default LandingContent;
