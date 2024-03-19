import React from 'react'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { Copyright } from 'components/toSort/Copyright'
import { useRigisterForm } from './useRigisterForm'
import { InputField } from 'components/inputs'
import { CheckboxField } from 'components/inputs'
import {
  passwordValidation,
  emailValidation,
  standartValidation,
} from 'components/inputs'

export const RigisterForm: React.FC = () => {
  const { control, handleSubmit, register, errors, onSubmit } =
    useRigisterForm()
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
        }
      }}
      width={12}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <InputField
            name="name"
            label="Name"
            control={control}
            required
            fullWidth
            margin="normal"
            rules={standartValidation}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name="surname"
            label="Surname"
            control={control}
            required
            fullWidth
            margin="normal"
            rules={standartValidation}
          />
        </Grid>
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
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Privacy Policy
          </Link>
        </Grid>
        <Grid item>
          <Link href="/login" variant="body2">
            {'Already have an account? Sign In'}
          </Link>
        </Grid>
      </Grid>
      <Copyright />
    </Box>
  )
}
