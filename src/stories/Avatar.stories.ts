import { Meta, StoryObj,  } from '@storybook/react';
import Avatar from '../components/Avatar';


const meta: Meta<typeof Avatar> = {
  component: Avatar
}

export default meta;

type Story = StoryObj<typeof Avatar>;



export const Initials: Story = {
  args: {
    appearance: 'blue',
    size: 'medium',
    name: 'Samuel Cárdenas'
  },
};


export const Image: Story = {
    args: {
      size: 'medium',
      name: 'Samuel Cárdenas',
      img: 'https://thispersondoesnotexist.com/'
    },
  };


