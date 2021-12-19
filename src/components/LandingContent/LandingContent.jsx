import React from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Fade,
} from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { object, number } from 'yup';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import useStyles from './styles';

const LandingContent = ({ setQuestionsNumber, setShowConfirmBox }) => {
  const classes = useStyles();

  const initialValue = {
    questionsNumber: '',
  };

  //DELETE LOCAL STORAGE
  //localStorage.removeItem('quizReports');

  const handleSubmit = async (values, formikHelpers) => {
    setQuestionsNumber(values.questionsNumber);
    setShowConfirmBox(true);
    formikHelpers.resetForm();
  };

  return (
    <main>
      <div className={classes.headerContainer}>
        <Container maxWidth="sm">
          <Typography
            className={classes.title}
            color="primary"
            align="center"
            variant="h1"
            gutterBottom
          >
            <ContactSupportIcon />
            Nerd Quiz
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            paragraph
          >
            Fun questions of nerd trivia to challenge your knowledge
          </Typography>
        </Container>
      </div>
      <Container align="center">
        <Fade in={true}>
          <Box boxShadow={1} className={classes.inputBox}>
            <Typography variant="h6" align="center" color="textSecondary">
              How many questions?
            </Typography>
            <Formik
              initialValues={initialValue}
              onSubmit={(values, formikHelpers) => {
                handleSubmit(values, formikHelpers);
              }}
              validationSchema={object({
                questionsNumber: number()
                  .required('Please fill with a number between 1 and 50')
                  .min(1, 'Minimal value 1')
                  .max(50, 'Max value 50'),
              })}
            >
              {({ errors, isValid, touched, dirty }) => (
                <Form className={classes.form}>
                  <Field
                    className={classes.input}
                    name="questionsNumber"
                    type="number"
                    as={TextField}
                    variant="filled"
                    label="Questions"
                    InputProps={{ inputProps: { min: 0, max: 50 } }}
                    error={
                      Boolean(errors.questionsNumber) &&
                      Boolean(touched.questionsNumber)
                    }
                    helperText={
                      Boolean(touched.questionsNumber) && errors.questionsNumber
                    }
                  />
                  <Button
                    disabled={!dirty || !isValid}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    <KeyboardArrowRightIcon />
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Fade>
      </Container>
    </main>
  );
};

export default LandingContent;
