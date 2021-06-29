import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import PaginationItemComponent, { PaginationItemProps } from '.';

export default {
  title: 'Design System/Atoms/Pagination Item',
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
      description: 'Fill color and border color.',
      table: {
        type: {
          summary: 'light | dark',
        },
        defaultValue: {
          summary: 'dark',
        },
      },
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
    },
    selected: {
      description: 'If "true" the component is selected.',
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
          summary:
            'xxsmall | xsmall | small | medium | large | xlarge | xxlarge',
        },
        defaultValue: {
          summary: 'small',
        },
      },
      control: {
        type: 'select',
        options: [
          'xxsmall',
          'xsmall',
          'small',
          'medium',
          'large',
          'xlarge',
          'xxlarge',
        ],
      },
    },
    shape: {
      description: 'The shape of the component.',
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

export const PaginationItem: Story<PaginationItemProps> = args => (
  <PaginationItemComponent {...args} />
);
