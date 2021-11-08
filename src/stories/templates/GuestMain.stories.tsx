import GuestMainTemplate, {
  GuestMainProps,
} from "@src/templates/GuestMain.template";

export default {
  title: "template",
  component: GuestMainTemplate,
};

const Template = (args: GuestMainProps) => <GuestMainTemplate {...args} />;

export const GuestMain = Template.bind({});
