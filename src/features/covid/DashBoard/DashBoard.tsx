import React, { useEffect } from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Grid,
} from "@material-ui/core";
import styles from "./DashBoard.module.css";

import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../app/hooks";
import { selectDaily, fetchAsyncGetDaily } from "../covidSlice";

import PieChart from "../PieChart/PieChart";
import SwitchCountry from "../SwitchCountry/SwitchCountry";
import Chart from "../Chart/Chart";
import Cards from "../Cards/Cards";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  content: {
    marginTop: 85,
  },
}));

const DashBoard: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const daily = useSelector(selectDaily);

  useEffect(() => {
    dispatch(fetchAsyncGetDaily("japan"));
  }, [dispatch]);

  return (
    <>
      <AppBar color="secondary" position="absolute">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Covid 19 Live DashBoard
          </Typography>

          <div>
            <Typography variant="body1">
              {new Date(daily[daily.length - 1].Date).toDateString()}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        <div className={classes.content}>
          <SwitchCountry />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Cards />
          </Grid>
          <Grid item xs={12} md={7}>
            <Chart />
          </Grid>
          <Grid item xs={12} md={7}>
            <PieChart />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default DashBoard;
