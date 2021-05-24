import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  actionBar: {
    width: 'calc(100% - 288px)', // ajustar este calculo
    minHeight: '50px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'fixed',
    bottom: '24px',
  },
  actionBarButton: {
    marginRight: theme.spacing(1),
  },
  addButton: {
    width: '180px'
  }
}));

export default useStyles;
