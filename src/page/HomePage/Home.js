import React from "react";
import "./styles.scss";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux"; // Import useSelector hook
import Counter from "../../components/Counter/Counter";

function Home() {
  const counter = useSelector((state) => state);
  console.log(counter, "counter value");

  const titleColor = counter % 2 === 0 ? "red" : "yellow";

  const secondTitleColor = titleColor === "red" ? "blue" : "pink";

  const makeBold = secondTitleColor === "blue" ? "300" : "900";
  
  const makeUnderline = secondTitleColor === "blue" ? "underline" : "none";

  return (
    <>
      <Typography variant="h2" style={{ color: titleColor }}>
        Shubh Labh Online Task
      </Typography>
      <Typography variant="h4" style={{ color: secondTitleColor }}>
        Task: Counter Which have Increment and Decrement Button
      </Typography>
      <Typography variant="h6" style={{ fontWeight: makeBold, textDecoration: makeUnderline }}>
        Used: Mui React, Redux
      </Typography>
      <Counter />
    </>
  );
}

export default Home;
