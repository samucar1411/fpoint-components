

import { Meta, StoryObj,  } from '@storybook/react';
import { Toggle } from '../components/Toggle';



const meta: Meta<typeof Toggle> = {
  component: Toggle
}

export default meta;

type Story = StoryObj<typeof Toggle>;



export const DefaultToggle: Story = {
  args: {
    disabled: false,
    defaultChecked: false,
  },
};

export const WithLabel: Story = {
    args: {
      disabled: false,
      defaultChecked: false,
      label: 'Toggle label',
    },
  };
  
  export const WithHelperText: Story = {
    args: {
      disabled: false,
      defaultChecked: false,
      label: 'Toggle label',
      helperText: 'Helper text'
    },
  };
  

  export const Disabled: Story = {
    args: {
      disabled: true,
      defaultChecked: false,
    },
  };

  export const DisabledChecked: Story = {
    args: {
      disabled: true,
      defaultChecked: true,
    },
  };
  
  

