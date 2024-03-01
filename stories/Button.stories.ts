import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    controls: {
      include: ["variant", "size", "isLoading", "children"],
    },
  },
  tags: ["autodocs"],
  args: {
    variant: "primary",
    size: "md",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};

export const Icon: Story = {
  args: {
    variant: "outline",
    size: "icon",
    children: "B",
  },
};
