import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginFormI } from "../interfaces/loginForm";
import { Link  as LinkRouter } from "react-router-dom";

export const LoginForm = ( { title }: { title: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormI>({
    defaultValues: { user: "", password: "" },
  });
  const onSubmit: SubmitHandler<LoginFormI> = (data) => console.log(data);

  return (
    <Grid
      component={"form"}
      container
      spacing={3}
      justifyContent={"center"}
      alignItems={"center"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid item xs={12}>
        <Typography align="center" variant="h4">
          { title }
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="User"
          variant="outlined"
          {...register("user", { required: true })}
          error={!!errors.user}
          helperText={errors.user && "El campo es requerido"}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          type="password"
          {...register("password", { required: true })}
          error={!!errors.password}
          helperText={errors.password && "El campo es requerido"}
        />
      </Grid>
      <Grid item xs={12}>
        <Button type="submit" fullWidth variant="contained">
         Ingresar
        </Button>
      </Grid>
      <Grid container direction='row' justifyContent='end'>
        <Typography mt={2} >¿No tenés cuenta?<Link component={ LinkRouter } px={1} color='inherit' to="/auth/signup">Registrate</Link></Typography>
      </Grid>
    </Grid>
  );
};
