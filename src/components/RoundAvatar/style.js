import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '0 auto',
    background: 'grey',
  },
  avatarImage: {
    width: '100%',
    height: 'auto',
  },
}));

export default useStyles;
