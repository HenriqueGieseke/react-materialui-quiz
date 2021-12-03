import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navTitle: {
    fontSize: '2rem',
  },
  link: {
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1rem',
  },
}));

export default useStyles;
