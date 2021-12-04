import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    maxWidth: '45rem',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 4, 5),
    margin: '5rem 0',
    borderRadius: '10px',
  },
  resultsContainer: {
    width: '17rem',
    padding: theme.spacing(3, 4, 3),
    backgroundColor: theme.palette.background.default,
    borderRadius: '10px',
    margin: '2rem 0',
  },
}));

export default useStyles;
