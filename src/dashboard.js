import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import SimpleCard from './card';
import MediaCard from './mediacart';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
         <SimpleCard title = {"Dự án"} quantity = { " 1000"} />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <SimpleCard title = {"Số ảnh đã label"} quantity = { " 53316"} />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <SimpleCard title = {"Số ảnh trong ngày"} quantity = { " 1459"} />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <SimpleCard title = {"Tỉ lệ sai"} quantity = { " 15%"} />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <SimpleCard />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <SimpleCard />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <MediaCard />
        </Grid>
        <Grid
          item
          lg={4}
          md={12}
          xl={9}
          xs={12}
        >
          <MediaCard />
        </Grid>
        <Grid
          item
          lg={4}
          md={12}
          xl={9}
          xs={12}
        >
          <MediaCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;