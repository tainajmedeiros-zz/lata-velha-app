import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  listContainer: {
    width: '100%',
    maxHeight: '600px', // maybe calculate this based on action bar height
    overflow: 'auto',
    [theme.breakpoints.up('lg')]: {
      maxHeight: '800px',
    },
  },
  list: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '2vw',
  },
}));

export default useStyles;
