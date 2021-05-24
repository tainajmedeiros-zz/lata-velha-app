/* eslint-disable react/display-name */
import {
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import style from './style';
import { ExitToApp as ExitToAppIcon } from '@material-ui/icons';
import { useHistory } from 'react-router';
import { SIGNIN_PATH, VEHICLES_PATH } from '../../routes/constants';

const Menu = ({ handleDrawerToggle, window, mobileOpen, setToken, token }) => {
  const theme = useTheme();
  const classes = style(theme);
  const history = useHistory();

  const CustomLink = forwardRef((props, ref) => {
    return <NavLink innerRef={ref} activeClassName={classes.navLinkActive} exact {...props} />
  });

  const handleLogout = () => {
    setToken(null);
    history.push(VEHICLES_PATH);
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {routes.map(({ name, path, Icon, isPrivate }) =>
          (((isPrivate && !token) || path === SIGNIN_PATH && token) ? null : (
            <ListItem className={classes.navLink} key={path} component={CustomLink} to={path}>
              <ListItemIcon color="disabled" className={classes.navLinkActiveIcon}>{Icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          ))
        )}
        {
          token && (
            <ListItem className={classes.navLink}>
               <button className={classes.navLinkLogout} onClick={() => handleLogout()}>
                <ListItemIcon color="disabled"><ExitToAppIcon /></ListItemIcon>
                <ListItemText primary="Sair" />
              </button>
            </ListItem>
          )
        }
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders" data-testid="menu">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
};

Menu.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  window: PropTypes.func,
  mobileOpen: PropTypes.bool.isRequired,
  token: PropTypes.string,
  setToken: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  window: undefined,
  token: ''
};

export default Menu;
