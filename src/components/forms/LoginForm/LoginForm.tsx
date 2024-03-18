import React from 'react'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'


import { useLoginForm } from './useLoginForm'
import { InputField } from 'components/inputs'
import { CheckboxField } from 'components/inputs'
import { passwordValidation, emailValidation } from 'components/inputs'

export const LoginForm: React.FC = () => {
  const { control, handleSubmit, register, errors, onSubmit } = useLoginForm()
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: 1 }}
    >
      <InputField
        name="username"
        label="Email"
        control={control}
        required
        fullWidth
        margin="normal"
        rules={emailValidation}
      />

      <InputField
        name="password"
        label="Password"
        type="password"
        control={control}
        required
        fullWidth
        margin="normal"
        rules={passwordValidation}
      />
      <CheckboxField name="remember" control={control} />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}
