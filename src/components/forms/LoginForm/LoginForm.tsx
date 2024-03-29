import React from 'react'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { Copyright } from 'components/toSort/Copyright'
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
      sx={{
        mt: 1,
        width: {
          xs: '100%', // Full width on extra small screens
          sm: '85%', // 85% width on small screens and above
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputField
            name="email"
            label="Email"
            control={control}
            required
            fullWidth
            margin="normal"
            rules={emailValidation}
          />
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
          <CheckboxField name="remember" control={control} />
        </Grid>
      </Grid>
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
          <Link href="/register" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
      <Copyright />
    </Box>
  )
}
