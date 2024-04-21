import React from "react";
import "./styles.scss";
import { Typography } from "@mui/material";
import Counter from "../../components/Counter/Counter";

function Home() {
  return (
    <>
      <Typography variant="h2">Shubh Labh Online Task</Typography>
      <Typography variant="h4">
        Task: Counter Which have Increament and Decreament Button
      </Typography>
      <Typography variant="h6">Used: Mui React, Redux</Typography>
      <Counter />
    </>
  );
}

export default Home;
