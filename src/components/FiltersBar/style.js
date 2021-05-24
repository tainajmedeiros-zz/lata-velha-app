import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  filtersBar: {
    width: '100%',
    minHeight: '50px',
    marginBottom: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
  },
}));

export default useStyles;
