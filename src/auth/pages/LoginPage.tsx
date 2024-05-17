import {  Grid, Paper } from "@mui/material"
import { LoginForm } from "../components/LoginForm"

export const LoginPage = () => {
  return (
    <Grid spacing={3} component={'main'} sx={{height:'100vh'}} justifyContent='center' alignItems='center' container>
            <Grid item xs={11} sm={6} xl={4} >
                <Paper elevation={2} sx={{padding: 3}}>
                    <LoginForm/>
                </Paper>
            </Grid>
    </Grid>
  )
}
