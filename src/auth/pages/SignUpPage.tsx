import { FormLayout } from '../layout/FormLayout'
import { SignUp } from '../components/SignUp'
import { Container } from '@mui/material'

export const SignUpPage = () => {
  return (
    <Container
    component={'main'}
    sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}
    }
    >
      <FormLayout title='Registrate'>
        <SignUp />
      </FormLayout>
    </Container>
  )
}
