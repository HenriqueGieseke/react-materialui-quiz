import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonsBox: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 2, 6),
    borderRadius: '10px',
    marginTop: '7rem',
    width: '90%',
    maxWidth: '400px',
  },
}));

export default useStyles;
