import { Grid, Paper } from "@mui/material";

interface FormLayoutProps {
    children: React.ReactNode;
    }

export const FormLayout = ( { children }: FormLayoutProps ) => {
  return (
    <Grid
      spacing={3}
      component={"main"}
      sx={{ height: "100vh" }}
      justifyContent="center"
      alignItems="center"
      container
    >
      <Grid item xs={11} sm={6} lg={4}>
        <Paper elevation={2} sx={{ padding: 3 }}>
          {children}
        </Paper>
      </Grid>
    </Grid>
  );
};
