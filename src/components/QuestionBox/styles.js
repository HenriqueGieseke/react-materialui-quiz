import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '90%',
    maxWidth: '50rem',
    padding: theme.spacing(3, 4, 3),
    marginBottom: '2rem',
  },
}));

export default useStyles;
