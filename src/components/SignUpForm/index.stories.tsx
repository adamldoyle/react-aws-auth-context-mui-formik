import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SignUpFormProps } from '@adamldoyle/react-aws-auth-context-core';
import { SignUpForm } from './';

export default {
  title: 'components/SignUpForm',
  component: SignUpForm,
} as Meta;

const Template: Story<SignUpFormProps> = (args) => <SignUpForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
