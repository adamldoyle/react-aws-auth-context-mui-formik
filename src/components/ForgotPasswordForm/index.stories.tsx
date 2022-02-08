import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ForgotPasswordFormProps } from '@adamldoyle/react-aws-auth-context-core';
import { ForgotPasswordForm } from './';

export default {
  title: 'components/ForgotPasswordForm',
  component: ForgotPasswordForm,
} as Meta;

const Template: Story<ForgotPasswordFormProps> = (args) => <ForgotPasswordForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
