import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement } from "../../redux/actions";
import { Grid, Button, Card, CardContent } from "@mui/material";

const Counter = () => {
          
          const dispatch = useDispatch();              
          const counterValue = useSelector((state) => state);

          console.log(counterValue, 'redux data')

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card elevation={4} style={{ padding: 16 }}>
            <CardContent>
              <h2 style={{ textAlign: "center" }}>Counter: {counterValue}</h2>
              <Grid container spacing={2} justifyContent="center">
                
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => dispatch(Increment())}
                    style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", }}
                  >
                    Increment
                  </Button>
                </Grid>
                
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => dispatch(Decrement())}
                    style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
                  >
                    Decrement
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Counter;
