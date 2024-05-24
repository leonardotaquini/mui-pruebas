import { Container } from "@mui/material";
import { LoginForm } from "../components/LoginForm";
import { FormLayout } from "../layout/FormLayout";

export const LoginPage = () => {
  return (
    <Container
    component={'main'}
    sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}
    }
    >
      <FormLayout title="Iniciar Sesion">
        <LoginForm />
      </FormLayout>
    </Container>
  );
};
