import React from "react";
import styles from "./Cards.module.css";
import CountUp from "react-countup/build/CountUp";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import { GiHastyGrave } from "react-icons/gi";
import { MdLocalHospital } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

import { useSelector } from "react-redux";
import { selectDaily } from "../covidSlice";

const Cards: React.FC = () => {
  const daily = useSelector(selectDaily);

  return (
    <div className={styles.container}>
      <Grid container spacing={1} justify="center">
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={styles.infected}
        >

          
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
