import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupIcon from '@material-ui/icons/Group';
import WorkIcon from '@material-ui/icons/Work';
import DashboardIcon from '@material-ui/icons/Dashboard';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListDividers() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
      <ListItemAvatar>
          <Avatar>
            <DashboardIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <Divider />
      <ListItem button divider>
      <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary="Dự Án" />
      </ListItem>
      <ListItem button>
      <ListItemAvatar>
          <Avatar>
            <GroupIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary="Thành Viên" />
      </ListItem>
      <Divider light />
      <ListItem button>
      <ListItemAvatar>
          <Avatar>
            <SettingsIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary="Cài đặt" />
      </ListItem>
    </List>
  );
}
