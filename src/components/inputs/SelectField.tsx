import React from 'react';
import { TextField, MenuItem } from '@mui/material';
import { Controller } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';

interface SelectFieldProps extends Omit<TextFieldProps, 'name'> {
  name: string;
  control: any;
  rules?: Object;
  options: { value: string; label: string }[];
}

export const SelectField: React.FC<SelectFieldProps> = ({
  name,
  control,
  rules,
  options,
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
          select
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};
