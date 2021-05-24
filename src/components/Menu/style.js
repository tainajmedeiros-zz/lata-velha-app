import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  navLink: {
    cursor: 'pointer',
    color: theme.palette.text.primary,
    transition: 'all 0.1s linear',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#ffffff', 
      '& svg': {
        color: '#ffffff', 
      },
    },
    '&:hover > button': {
      color: '#ffffff', 
    },
  },
  navLinkActive: {
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff', 
    '& svg': {
      color: '#ffffff', 
    },
  },
  navLinkLogout: {
    border: 'none',
    padding: 0,
    background: 'none',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
}));

export default useStyles;
