import { Button, Grid, TextField, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginFormI } from "../interfaces/loginForm";

export const LoginForm = () => {
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
          SignIn
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
          Login
        </Button>
      </Grid>
    </Grid>
  );
};
