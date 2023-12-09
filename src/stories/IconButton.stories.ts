

import { Meta, StoryObj,  } from '@storybook/react';
import IconButton from '../components/IconButton';

import { Placeholder } from '@untitled-ui/icons-react';


const meta: Meta<typeof IconButton> = {
  component: IconButton
}

export default meta;

type Story = StoryObj<typeof IconButton>;



export const Default: Story = {
  args: {
    variant: 'default',
    appearance: 'primary',
    size: 'medium',
    icon: Placeholder,
    disabled: false
  },
};



