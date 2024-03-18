import React from 'react'
import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import { TextFieldProps } from '@mui/material'

interface InputFieldProps extends Omit<TextFieldProps, 'name'> {
  name: string
  control: any
  rules?: Object
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  control,
  rules,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          {...props}
          {...field}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  )
}
