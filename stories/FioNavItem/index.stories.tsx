import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FioNavItem } from ".";
import { DashboardIcon } from "../Icons/DashboardIcon";

export default {
  title: "FiO/NavItem",
  component: FioNavItem,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} as ComponentMeta<typeof FioNavItem>;

const Template: ComponentStory<typeof FioNavItem> = (args) => {
  return <FioNavItem {...args} />;
};
export const NavItemPrimary = Template.bind({});
NavItemPrimary.args = {
  name: "Dashboard",
  Icon: DashboardIcon,
};

export const NavItemOnSelected = Template.bind({});
NavItemOnSelected.args = {
  ...NavItemPrimary.args,
  fontColor: "white",
  iconColor: "white",
  selected: true,
};

export const NavItemOnNotSelected = Template.bind({});
NavItemOnNotSelected.args = {
  ...NavItemPrimary.args,
  fontColor: "white",
  iconColor: "white",
  selected: false,
};
