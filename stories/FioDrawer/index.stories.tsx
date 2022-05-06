import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FioDrawer } from ".";
import GlasswallLogo from "../Icons/GlasswallLogo";
import { bottomNavItems, navItems } from "./navItems";

export default {
  title: "Fio/Drawer",
  component: FioDrawer,
  parameters: {
    // More on Story LeftNavBar: https://storybook.js.org/docs/react/configure/story-LeftNavBar
    LeftNavBar: "fullscreen",
  },
} as ComponentMeta<typeof FioDrawer>;

const Template: ComponentStory<typeof FioDrawer> = (args) => (
  <FioDrawer {...args} />
);
export const LeftNavBarPrimary = Template.bind({});
LeftNavBarPrimary.args = {
  drawerWidth: 340,
  navItems,
  bottomNavItems,
  Logo: GlasswallLogo,
};
