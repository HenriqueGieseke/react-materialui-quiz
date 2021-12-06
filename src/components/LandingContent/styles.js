import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '1.83rem',
  },
  headerContainer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  inputBox: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 2, 6),
    borderRadius: '10px',
    marginTop: '7rem',
    width: '90%',
    maxWidth: '400px',
  },
  input: {
    width: '8rem',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

export default useStyles;
