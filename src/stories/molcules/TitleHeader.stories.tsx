import TitleHeaderComponent from "@src/components/molecules/TitleHeader.component";

export default {
  title: "molecules/Title Header",
  component: TitleHeaderComponent,
};

export const TitleHeader = () => (
  <TitleHeaderComponent backLink="/" title="타이틀 제목" />
);
