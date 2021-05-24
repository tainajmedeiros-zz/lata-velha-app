import { makeStyles } from '@material-ui/core/styles';
// import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  cardContent: {
    padding: theme.spacing(1),
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  model: {
    maxWidth: '130px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textTransform: 'capitalize',
  },
}));

export default useStyles;
