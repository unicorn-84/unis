import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import PaginationItemComponent, { PaginationItemProps } from '.';

export default {
  title: 'Design System/Atoms/PaginationItem',
  parameters: {
    docs: {
      description: {
        component: 'The pagination item',
      },
    },
  },
  args: {},
  argTypes: {
    color: {
      description: 'Fill color or border color.',
      table: {
        type: {
          summary: 'light | dark',
        },
        defaultValue: {
          summary: 'light',
        },
      },
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
    },
    selected: {
      description: 'If "true" the pagination item is selected.',
      table: {
        type: {
          summary: 'true | false',
        },
        defaultValue: {
          summary: 'false',
        },
      },
      control: {
        type: 'boolean',
      },
    },
    size: {
      description: 'The size of the component.',
      table: {
        type: {
          summary: 'xxsmall | xsmall | small | medium | large | xlarge',
        },
        defaultValue: {
          summary: 'medium',
        },
      },
      control: {
        type: 'select',
        options: ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge'],
      },
    },
    shape: {
      description: 'The shape of the pagination item.',
      table: {
        type: {
          summary: 'circular | rounded | quadratic',
        },
        defaultValue: {
          summary: 'circular',
        },
      },
      control: {
        type: 'select',
        options: ['circular', 'rounded', 'quadratic'],
      },
    },
  },
} as Meta;

const Template: Story<PaginationItemProps> = args => (
  <div
    style={{
      display: 'grid',
      placeItems: 'center',
      height: 250,
      backgroundColor: 'lightgreen',
    }}
  >
    <PaginationItemComponent {...args} />
  </div>
);

export const PaginationItem = Template.bind({});

PaginationItem.args = {};