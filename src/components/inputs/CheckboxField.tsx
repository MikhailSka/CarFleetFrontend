import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import { Controller } from 'react-hook-form';

interface CheckboxFieldProps {
  name: string;
  control: any;
}

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  name,
  control,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={<Checkbox {...field} color="primary" />}
          label="Remember me"
        />
      )}
    />
  );
};
