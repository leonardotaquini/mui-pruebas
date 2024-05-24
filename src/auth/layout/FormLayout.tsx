import { Avatar, Box, Container, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
;

interface FormLayoutProps {
    title: string;
    children: React.ReactNode;
    }

export const FormLayout = ( { children, title }: FormLayoutProps ) => {
  return (
    <Box>
      <Container
        component="section"
        maxWidth="sm"
        sx={{
          backgroundColor: "white",
          opacity: 0.9,
          borderRadius: "10px",
          boxShadow: 15,
          mt: 8,
        }}
      >
        <Box
          sx={{
            margin: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {title}
          </Typography>
          {children}
        </Box>
      </Container>

    </Box>
  );
};
