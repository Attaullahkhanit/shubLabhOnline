import React from "react";
import "./styles.scss";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux"; // Import useSelector hook
import Counter from "../../components/Counter/Counter";

function Home() {
  const counter = useSelector((state) => state.counter);
  const titleColor = counter !== undefined && counter % 2 === 0 ? "red" : "yellow";

  return (
    <>
      <Typography variant="h2" style={{ color: titleColor }}>
        Shubh Labh Online Task
      </Typography>
      <Typography variant="h4">
        Task: Counter Which have Increment and Decrement Button
      </Typography>
      <Typography variant="h6">Used: Mui React, Redux</Typography>
      <Counter />
    </>
  );
}

export default Home;
