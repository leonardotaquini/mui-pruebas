import { Grid, Typography, Button } from "@mui/material"
import { Link as LinkRouter } from "react-router-dom"

export const NotFound = () => {
  return (
    <>
        <Grid component={'main'} container height={'100vh'} justifyContent={'center'} alignItems={'center'}>
            <Grid component={'section'} item xs={11} sm={8} lg={12} textAlign={'center'}>
              <Typography variant="h4" sx={{m:4}}>Pagina no encontrada</Typography>
              <Button variant="contained" component={ LinkRouter }  to="/" sx={{}}>Volver al inicio</Button>
            </Grid>
        </Grid>
    </>
  )
}
