// components
import { Button } from "@src/components/atoms/Button";
import PageWrapperComponent from "@src/components/organs/PageWrapper.component";

function StudyJoinFormTemplate() {
  return (
    <PageWrapperComponent
      title=""
      backLink="/"
      button={
        <Button color="point" height="44px" fontSize="small" width="100px">
          참여 신청
        </Button>
      }
    >
      hi
    </PageWrapperComponent>
  );
}

export default StudyJoinFormTemplate;
