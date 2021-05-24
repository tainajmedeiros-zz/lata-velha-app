import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 250,
    maxWidth: 250,
    display: 'inline-block',
    marginRight: '20px',
    marginBottom: '20px',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  name: {
    display: 'inline-block',
    maxWidth: '130px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

export default useStyles;
