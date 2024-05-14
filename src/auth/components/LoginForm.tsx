import { Button, Grid, TextField, Typography } from '@mui/material'

export const LoginForm = () => {
  return (
        <Grid component={'form'} container spacing={3} justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={12} >
                <Typography align='center' variant="h4">SignIn</Typography>
            </Grid>
            <Grid item xs={12} >
                <TextField fullWidth id="outlined-basic" label="User" variant="outlined" />
            </Grid>
            <Grid item xs={12} >
                <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" type="password"/>
            </Grid>
            <Grid item xs={12} >
                <Button fullWidth variant="contained" >Login</Button>
            </Grid>
        </Grid>
  )
}
