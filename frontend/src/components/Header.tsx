import React from "react";
import { Container, Grid, Link } from "@mui/material";

const Header = () => {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12} md={10}>
            <div>Farm Jobs</div>
          </Grid>
          <Grid item xs={12} md={1}>
            <div>
              <Link href="#" underline="hover">
                Sign In
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} md={1}>
            <div>
              <Link href="#" underline="hover">
                Post a Job
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Header;
