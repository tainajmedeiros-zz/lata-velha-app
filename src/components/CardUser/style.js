import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 250,
    maxWidth: 250,
    padding: '10px',
    display: 'inline-block',
    marginRight: '20px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
