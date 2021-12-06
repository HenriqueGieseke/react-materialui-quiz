import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navTitle: {
    fontSize: '1.5rem',
  },
  link: {
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  logoContainer: {
    display: 'flex',
    gap: '0.2rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default useStyles;
