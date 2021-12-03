import React from 'react';
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

const QuestionBox = () => {
  const classes = useStyles();

  return (
    <Card align="start" variant="outlined" className={classes.card}>
      <CardContent>
        <Typography color="textSecondary" variant="h6" component="h2">
          Question 1
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Which of the following colors does the Zombie eyes glow in the
          &quot;Nuketown&quot; map in &quot;Call of Duty: Black Ops II&quot;
          Zombies mode?
        </Typography>
      </CardContent>
      <CardActions>
        <RadioGroup aria-label="Opções" name="Opções">
          <FormControlLabel
            control={<Radio />}
            label="Yellow and Blue"
            value="Yellow and Blue"
          />
          <FormControlLabel
            control={<Radio />}
            label="Yellow and Red"
            value="Yellow and Red"
          />
          <FormControlLabel
            control={<Radio />}
            label="Red and Blue"
            value="Red and Blue"
          />
          <FormControlLabel
            control={<Radio />}
            label="Blue and White"
            value="Blue and White"
          />
        </RadioGroup>
      </CardActions>
    </Card>
  );
};

export default QuestionBox;
