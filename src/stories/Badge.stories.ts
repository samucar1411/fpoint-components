import { Meta, StoryObj,  } from '@storybook/react';
import { Badge } from '../components';
import { Lightning01 } from '@untitled-ui/icons-react';


const meta: Meta<typeof Badge> = {
  component: Badge
}

export default meta;

type Story = StoryObj<typeof Badge>;



export const Default: Story = {
  args: {
    intent: 'neutral',
    label: 'Badge Text'
  },
};

export const LeadingIcon: Story = {
    args: {
      intent: 'neutral',
      label: 'Badge Text',
      leadingIcon: Lightning01
    },
};


export const TrailingIcon: Story = {
    args: {
      intent: 'neutral',
      label: 'Badge Text',
      trailingIcon: Lightning01
    },
};
