import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '800px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    textAlign: 'center'
  },
}));

export default useStyles;

