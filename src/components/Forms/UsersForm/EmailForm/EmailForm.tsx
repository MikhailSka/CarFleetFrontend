import React from 'react';
import { Grid, Box } from '@mui/material';

import { EmailInput } from 'components/Inputs/EmailInput/Components/EmailInput';
import { ChangeButton } from 'components/Buttons/Components/TextButtons/ChangeButton';
import { useEmailForm } from './useEmailForm';
import { IUser } from 'models/IUser';

interface EmailFormProps {
  userData: IUser;
}

export const EmailForm: React.FC<EmailFormProps> = ({ userData }) => {
  const {
    controlEmail,
    registerEmail,
    handleSubmitEmail,
    errorsEmail,
    watchEmail,
    onSubmitEmail,
  } = useEmailForm(userData);

  return (
    <Box component="form" onSubmit={handleSubmitEmail(onSubmitEmail)} noValidate>
      <Grid container alignItems="center" margin="auto" marginY='15px' spacing={2} sx={{display:'-webkit-inline-flex'}}>
        <Grid padding="4px 0 5px" item xs={7}>
          <EmailInput control={controlEmail} errors={errorsEmail} register={registerEmail} />
        </Grid>
        <Grid item xs={2}>
          <ChangeButton disabled={userData.email === watchEmail('email')} />
        </Grid>
      </Grid>
    </Box>
  );
};