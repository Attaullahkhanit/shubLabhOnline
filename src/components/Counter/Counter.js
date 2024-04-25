import React, { useState } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "../../redux/actions";
import { Grid, Button, Card, CardContent } from "@mui/material";

const Counter = ({ counter, increment, decrement }) => {

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
              <h2 style={{ textAlign: "center" }}>Counter: {counter}</h2>
              <Grid container spacing={2} justifyContent="center">
                
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={increment}
                    style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", }}
                  >
                    Increment
                  </Button>
                </Grid>
                
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={decrement}
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

const mapStateToProps = (state) => ({
  counter: state.counter,
});
 

const mapDispatchToProps = {
  increment: incrementCounter,
  decrement: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
