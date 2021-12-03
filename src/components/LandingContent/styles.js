import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  inputBox: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 2, 6),
    borderRadius: '10px',
    marginTop: '7rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '90%',
    maxWidth: '400px',
  },
  input: {
    width: '7rem',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
}));

export default useStyles;
