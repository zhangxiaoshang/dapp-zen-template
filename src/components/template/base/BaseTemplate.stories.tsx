import type { Meta, StoryObj } from '@storybook/react'

import BaseTemplate from './BaseTemplate'

const meta = {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
argTypes: {},
} satisfies Meta<typeof BaseTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    simpleTextProp: 'This is a simple text prop',
  },
}
