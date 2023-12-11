import { Meta, StoryObj,  } from '@storybook/react';
import Button from '../components/Button';
import { Placeholder } from '@untitled-ui/icons-react';

 
const meta: Meta<typeof Button> = {
  component: Button
}

export default meta;

type Story = StoryObj<typeof Button>;


export const Default: Story = {
  args: {
    variant: 'default',
    appearance: 'primary',
    size: 'medium',
    label: 'Button label',
    disabled: false
  },
};

export const DefaultDisabled: Story = {
  args: {
    variant: 'default',
    appearance: 'primary',
    size: 'medium',
    label: 'Button label',
    disabled: true
  },
};

export const DefaultLoading: Story = {
  args: {
    variant: 'default',
    appearance: 'primary',
    size: 'medium',
    label: 'Button label',
    disabled: true,
    loading: true
  },
};

export const DefaultLeadingIcon: Story = {
  args: {
    variant: 'default',
    appearance: 'primary',
    size: 'medium',
    label: 'Button label',
    disabled: false,
    leadingIcon: Placeholder
  },
};


export const DefaultTrailingIcon: Story = {
  args: {
    variant: 'default',
    appearance: 'primary',
    size: 'medium',
    label: 'Button label',
    disabled: false,
    trailingIcon: Placeholder
  },
};


export const Ghost: Story = {
  args: {
    variant: 'ghost',
    appearance: 'primary',
    size: 'medium',
    label: 'Button label',
    disabled: false
  },
};

export const GhostDisabled: Story = {
  args: {
    variant: 'ghost',
    appearance: 'primary',
    size: 'medium',
    label: 'Button label',
    disabled: false
  },
};

export const GhosttLoading: Story = {
  args: {
    variant: 'ghost',
    appearance: 'primary',
    size: 'medium',
    label: 'Button label',
    disabled: false,
    loading: true
  },
};

export const GhostLeadingIcon: Story = {
  args: {
    variant: 'ghost',
    appearance: 'primary',
    size: 'medium',
    label: 'Button label',
    disabled: false,
    leadingIcon: Placeholder
  },
};


export const GhostTrailingIcon: Story = {
  args: {
    variant: 'ghost',
    appearance: 'primary',
    size: 'medium',
    label: 'Button label',
    disabled: false,
    trailingIcon: Placeholder
  },
};


export const Bare: Story = {
  args: {
    variant: 'bare',
    appearance: 'primary',
    size: 'medium',
    label: 'Button label',
    disabled: false
  },
};

export const BareDisabled: Story = {
  args: {
    variant: 'bare',
    appearance: 'primary',
    size: 'medium',
    label: 'Button label',
    disabled: true
  },
};

export const BareLoading: Story = {
  args: {
    variant: 'bare',
    appearance: 'primary',
    size: 'medium',
    label: 'Button label',
    disabled: false,
    loading: true
  },
};


export const BareLeadingIcon: Story = {
  args: {
    variant: 'bare',
    appearance: 'primary',
    size: 'medium',
    label: 'Button label',
    disabled: false,
    leadingIcon: Placeholder
  },
};


export const BareTrailingIcon: Story = {
  args: {
    variant: 'bare',
    appearance: 'primary',
    size: 'medium',
    label: 'Button label',
    disabled: false,
    trailingIcon: Placeholder
  },
};
