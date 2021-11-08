// TODO:: REMOVE THIS

export default {
  title: "Atoms/Button",
};

interface Props {
  contents: string;
}

const Template = (args: Props) => {
  const { contents } = args;
  return <button type="button">{contents}</button>;
};

export const DefaultButton = Template.bind({});

DefaultButton.args = {
  contents: "hi! button test",
};
