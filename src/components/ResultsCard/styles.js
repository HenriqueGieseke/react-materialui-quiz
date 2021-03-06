import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  resultsContainer: {
    width: '90%',
    maxWidth: '18rem',
    padding: theme.spacing(3, 4, 3),
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    margin: '2rem 0',
    cursor: 'pointer',
  },
  buttonContainer: {
    padding: '0',
  },
}));

export default useStyles;
