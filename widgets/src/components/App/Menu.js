import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Drawer,
  Divider,
  IconButton,
} from '@material-ui/core';
import { Home as HomeIcon, List as ListIcon, Settings as SettingsIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';

import 'components/App/App.css';

const styles = {
  item: {
    position: 'relative',
  },
  iconButton: {
    position: 'absolute',
    right: 5,
    top: 11,
  },
};

const Menu = ({ open, setOpen, classes }) => (
  <Drawer open={open} onClose={() => setOpen(false)}>
    <div className="app-list">
      <List>
        <ListItem button component={Link} to="/" onClick={() => setOpen(false)}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <Typography variant="overline">Widgets</Typography>
        <Divider />
        <div className={classes.item}>
          <ListItem button component={Link} to="/TaskList" onClick={() => setOpen(false)}>
            <ListIcon />
            <ListItemText primary="TaskList" />
          </ListItem>
          <IconButton
            className={classes.iconButton}
            size="small"
            component={Link}
            to="/TaskListConfig"
            onClick={() => setOpen(false)}
          >
            <SettingsIcon fontSize="small" />
          </IconButton>
        </div>
      </List>
    </div>
  </Drawer>
);

Menu.propTypes = {
  classes: PropTypes.shape({
    item: PropTypes.string,
    iconButton: PropTypes.string,
  }),
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  classes: {},
};

export default withStyles(styles)(Menu);