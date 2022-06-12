import React, { useEffect } from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import styles from "./DashBoard.module.css";

import { useAppDispatch } from "../../../app/hooks";
import { fetchAsyncGetDaily } from "../covidSlice";

import PieChart from "../PieChart/PieChart";

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

  useEffect(() => {
    dispatch(fetchAsyncGetDaily("japan"));
  }, [dispatch]);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Covid 19 Live DashBoard
          </Typography>
          <PieChart />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default DashBoard;
