import { Link, Grid, Box } from '@material-ui/core';
import * as Yup from 'yup';
import { ForgotPasswordFormProps, AuthMode } from '@adamldoyle/react-aws-auth-context-core';
import { InputField } from '../InputField';
import { AuthForm } from '../AuthForm';

const Schema = Yup.object({
  email: Yup.string().default('').required('Email is required').email('Invalid email syntax'),
});

const formDefaults = Schema.getDefault();

export function ForgotPasswordForm({ email, resetPassword, switchMode }: ForgotPasswordFormProps): JSX.Element {
  return (
    <AuthForm
      title="Reset password"
      Schema={Schema}
      formDefaults={{ ...formDefaults, email: email ?? '' }}
      submitLabel="Reset password"
      onSubmit={resetPassword}
      formBody={
        <>
          <Grid item xs={12}>
            <InputField label="Email" field="email" autoComplete="email" variant="outlined" fullWidth autoFocus />
          </Grid>
        </>
      }
      actions={(values) => (
        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <Link
            component="button"
            variant="body2"
            onClick={(evt: React.MouseEvent) => {
              evt.preventDefault();
              return switchMode(AuthMode.SIGN_UP, values.email);
            }}
          >
            Don&#39;t have an account? Sign up
          </Link>
          <Link
            component="button"
            variant="body2"
            onClick={(evt: React.MouseEvent) => {
              evt.preventDefault();
              return switchMode(AuthMode.SIGN_IN, values.email);
            }}
          >
            Remember your password? Sign in
          </Link>
        </Box>
      )}
    />
  );
}
