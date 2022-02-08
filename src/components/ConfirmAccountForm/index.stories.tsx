import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ConfirmAccountFormProps } from '@adamldoyle/react-aws-auth-context-core';
import { ConfirmAccountForm } from './';

export default {
  title: 'components/ConfirmAccountForm',
  component: ConfirmAccountForm,
} as Meta;

const Template: Story<ConfirmAccountFormProps> = (args) => <ConfirmAccountForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  email: 'sample@sample.com',
};
